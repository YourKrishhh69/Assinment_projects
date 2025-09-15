const express = require("express");

const app = express();
let countrer = 0;
app.use(function requestcinter(req , res , next){
    countrer = countrer + 1 
    next()
})
app.get("/",(req , res)=>{
    res.json({
        msg:"welcome :}"
    })

})

app.get("/counter",(req ,res)=>{
    res.json({
        requestToServer:countrer
    })
})


app.listen(3000,()=>{
    console.log("server are running.....")
})