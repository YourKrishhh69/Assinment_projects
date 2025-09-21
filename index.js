const express = require("express");
const app = express();

/**
 * it is a middlware that log:
 * method , url and timestamp 
 */
function http_log(req,res,next){
    const method = req.method;
    const URL = req.url;
    const time = new Date

    console.log(`the method is : ${method}`);
    console.log(`the url is : ${URL}`);
    console.log(`Time is : ${time}`);

}
app.use(http_log)
app.get("/about",(req,res)=>{
    console.log(`this is a about page `)
})
app.listen(3000,(err)=>{
    try{
        if(err){
            console.log(`error is ${err}`);
        }
        else{
            console.log("server are running.....");
        }
    }catch(Error){
        console.log(Error)
    }
})