import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import { test } from "./backend/controllers/empleados.controller.js";

dotenv.config();
mongoose.connect(process.env.urlBD)
.then(()=>{
    console.log("Funciona la base de datos")
})
.catch(()=>{
    console.log("Algo fallo en la base", error)
})

const app = express();
app.use(cors())
app.listen(4000, ()=>{
    console.log("Escuchando al servidor")
})
test();