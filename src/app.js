const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mensRanking = require("../src/modals/modal");
app.use(express.json());

require("../src/db/conn");
app.get("/hello", async(req,res)=>{
    res.send("Hello from the thapa");
});
app.post("/mens",async(req,res)=>{
    try{

        const addingMens = new mensRanking(req.body);
        console.log(addingMens);
        console.log(req.body);
        const insertMen = await addingMens.save();
        res.status(201).send(insertMen) 
    }catch(e){
        console.log(e);
        res.status(400).send(e);
    }
})
app.get("/mens",async(req,res)=>{
    try{
        const getMens = await mensRanking.find({});    
        res.status(201).send(getMens) 
    }catch(e){
        console.log(e);
        res.status(400).send(e);
    }
})


app.listen(port, ()=>{
    console.log(`connection is successful  at port number. ${port}`);
})