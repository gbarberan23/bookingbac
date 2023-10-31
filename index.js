import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
const app = express()
dotenv.config()

const connect = async ()=>{
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Conectado a mongo!!")
  } catch (error) {
    throw error 
  }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongo esta desconectado ")
})
mongoose.connection.on("connected", ()=>{
    console.log("mongo connected ")
})

app.listen(8800, ()=>{
    connect()
    console.log("conectado al backend!")
})

//mongodb+srv://gabriel:<password>@cluster1.xliyhys.mongodb.net/?retryWrites=true&w=majority