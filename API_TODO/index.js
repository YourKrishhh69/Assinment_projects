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

})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
