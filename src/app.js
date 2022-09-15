const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const MensRouter = require("../src/routes/route")
app.use(express.json());
app.use(MensRouter);

require("../src/db/conn");
app.get("/hello", async(req,res)=>{
    res.send("Hello from the thapa");
});


app.listen(port, ()=>{
    console.log(`connection is successful  at port number. ${port}`);
})