const express = require("express");
const app = express()
let count = 0;
app.use(function(req,res,next){
    count = count + 1 
    if(count>5){
        res.status(401).json({
            massage:"ohh site :0"
        })
    }
    next()
})

app.get("/user",(req,res)=>{
    res.json({
        msg:"server run properly"
    })
})


app.listen(3000,()=>[
    console.log("sever are runnnig ,..")
])