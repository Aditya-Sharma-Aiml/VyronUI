import { genToken } from "../configs/token.js"
import User from "../models/user.model.js"
import axios from "axios"

const authCookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000
}


export const googleSignup = async (req,res) => {
    try {
        const {idToken, firebaseApiKey} = req.body
        if (!idToken) {
            return res.status(400).json({message:"Firebase ID token is required"})
        }

        const apiKey = process.env.FIREBASE_API_KEY || firebaseApiKey;
        if (!apiKey) {
            return res.status(500).json({message:"Firebase API key is missing"})
        }

        const tokenPayload = JSON.parse(
            Buffer.from(idToken.split(".")[1] || "", "base64url").toString("utf8")
        )
        const expectedProjectId = process.env.FIREBASE_PROJECT_ID || "vyronui";
        if (tokenPayload.aud !== expectedProjectId || tokenPayload.iss !== `https://securetoken.google.com/${expectedProjectId}`) {
            return res.status(401).json({message:"Firebase token project mismatch"})
        }

        const firebaseRes = await axios.post(
            `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`,
            { idToken }
        )

        const firebaseUser = firebaseRes.data?.users?.[0]
        const email = firebaseUser?.email
        const name = firebaseUser?.displayName || email?.split("@")[0]

        if (!email) {
            return res.status(401).json({message:"Invalid Firebase token"})
        }

        let user= await User.findOne({email})
        if(!user){
            user = await User.create({
            name , email 
        })
        }
        let token =await genToken(user._id)
        if (!token) {
            return res.status(500).json({message:"token generation failed"})
        }

        res.cookie("token",token,authCookieOptions)
        return res.status(200).json(user)


    } catch (error) {
        console.log(error)
         return res.status(500).json({message:`googleSignup  ${error}`})
    }
    
}

export const logOut = async(req,res)=>{
    try {
        await res.clearCookie("token", authCookieOptions)
        return res.status(200).json({message:"logOut Successfully"})
    } catch (error) {
        return res.status(500).json({message:`logout Error ${error}`})
    }
}
