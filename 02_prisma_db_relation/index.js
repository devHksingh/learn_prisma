import express from 'express'
import cookieparser from 'cookie-parser'
import dotenv from "dotenv"

dotenv.config({
    path:'./.env'
})

const app = express()

// regular middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// cookie middleware
app.use(cookieparser())

app.get('/',(req,res)=>{
    res.send('Learning prisma with mongodb')
})

app.listen(3000,()=>console.log(`Server is running on port ${3000}`))
