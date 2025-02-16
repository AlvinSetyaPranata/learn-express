import express from "express";
import { addUser, getUsers } from "../controllers/users.js";


const userRoutes = express.Router();


userRoutes.get("/", getUsers)
userRoutes.post("/", addUser) 


export default userRoutes;