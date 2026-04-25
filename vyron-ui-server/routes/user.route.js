import express from "express"
import isAuth from "../middlewares/isAuth.js"
import isAdmin from "../middlewares/isAdmin.js"
import { getAllUsers, getCurrentUser } from "../controllers/user.controller.js"





let userRouter = express.Router()
userRouter.get("/currentuser",isAuth,getCurrentUser)
userRouter.get("/all-users",isAuth,isAdmin,getAllUsers)



export default userRouter
