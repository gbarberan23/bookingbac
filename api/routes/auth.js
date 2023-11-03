import express from "express"

const router = express.Router();


router.get("/", (req,res)=>{
    res.send("Hola esto es auth endpint")
})

router.get("/register", (req,res)=>{
    res.send("Hola esto es auth resgiter endpint")
})



export default router