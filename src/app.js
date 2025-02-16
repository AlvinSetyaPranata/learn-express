import express from "express";
import userRoutes from "./routes/users.js";

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoutes);


 app.listen(8000, () => {
    console.info("Application starts with http://localhost:8000");
 })

 export default app;