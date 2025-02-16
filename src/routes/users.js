import express from "express";
import { addUser, getUserById, getUsers, updateUser } from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";


const userRoutes = express.Router();


userRoutes.get("/", getUsers);
userRoutes.get("/:id", getUserById)
userRoutes.post("/", authMiddleware, addUser);
userRoutes.put("/", authMiddleware, updateUser);


export default userRoutes;