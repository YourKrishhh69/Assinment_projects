const express = require("express");
const data = require( "./database.json");
const fs = require("fs");

const port = 3000;
const app = express();

app.use(express.json())

app.get("/all-user", (req, res) => {
  res.json(data);
});

app.post("/new-user",(req,res)=>{
    let {name,job} = req.body;

    let newuser = {name,job};
    data.push(newuser)
    fs.writeFile("./database.json",JSON.stringify(data),(err)=>{
        if(err){
            res.status(400).json({
                error:err
            })
        }
            res.json(newuser)
    })

});

app.put("/update-user",(req,res)=>{
    const {oldname,newnam,newjob}= req.body;
    let userFound = false;
    for(let i = 0;i<data.length;i++){
        if(data[i].name === oldname){
            data[i].name = newnam;
            data[i].job = newjob;
            userFound = true;
            break;
        }
    }
    if(!userFound){
        res.status(400).json({
            massage:"User not found"
        })
    }
    fs.writeFile("./database.json",JSON.stringify(data),(err)=>{
        if(err){
            return res.status(500).json({ error: err });
        }
    })
    res.json({
        msg:"successfully"
    })

}
)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
