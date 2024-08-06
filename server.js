const express = require('express')
const app = express();
const PORT = 5000

app.get("/hello",(req,res)=>{
    res.status(200).json({
        "message":"hello world!",
        "status":200
    })
})


app.listen(PORT,()=>{
    console.log(`Server started in PORT: ${PORT}`)
})