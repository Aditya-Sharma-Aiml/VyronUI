
import jwt from "jsonwebtoken"

const isAuth=async (req,res,next)=>{
    try {
 
      let {token} = req.cookies
     
      if(!token){
        return res.status(401).json({message:"user doesn't have token"})
      }
      if(!process.env.JWT_SECRET){
        return res.status(500).json({message:"JWT secret is not configured"})
      }
      let verifyToken = jwt.verify(token,process.env.JWT_SECRET)
      
      if(!verifyToken){
        return res.status(401).json({message:"user doesn't have valid token"})
      }
  
      req.userId = verifyToken.userId
      next()
    } catch (error) {
        console.log(error)
        if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
          return res.status(401).json({message:"user doesn't have valid token"})
        }
        return res.status(500).json({message:`is auth error ${error.message}`})
    }
}
export default isAuth
