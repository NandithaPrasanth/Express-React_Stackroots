require('dotenv').config();
const express=require('express')
const app=express()
const cors=require('cors')
const bodyParser=require("body-parser")
const connection=require('./db')
const userRoutes=require("./Routes/user")
const authRoutes=require("./Routes/auth")

//Database Connection
connection();
//middlewares
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
//routes
app.use('/api/users',userRoutes)
app.use('/api/auth',authRoutes)


// app.get('/api',(req,res)=>{
//     res.json({"users":["userOne","userTwo","userThree"]})
// })
const port=process.env.PORT||5000;
app.listen(port,()=>console.log("Server started on port 5000"))


