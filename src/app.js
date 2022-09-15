const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const MensRouter = require("../src/routes/route");
const jwt = require("jsonwebtoken");
const mensRanking = require("./modals/modal");
app.use(express.json());
app.use(MensRouter);

require("../src/db/conn");
app.get("/hello", async(req,res)=>{
    res.send("Hello from the thapa");
});




// const createToken = async()=>{
//    const token = await jwt.sign({_id:"6322ace079e6b3526320e5a9"},"fdbffhddhsajdgsajhbsaxsahskdsajdbadshdsad",{
//     expiresIn: "2 seconds"
//    });
//    console.log(token);
//    const userver = await jwt.verify(token, "fdbffhddhsajdgsajhbsaxsahskdsajdbadshdsad");
//    console.log(userver);

// }
// createToken();

app.listen(port, ()=>{
    console.log(`connection is successful  at port number. ${port}`);
})


/**
 * Securing password using bcrypt 
 * const bcrypt = require("bcryprjs");
 * const securePassword = async(password)=>{
 * const passwordHash = await bcrypt.hash(password, 10);
 * console.log(passwordhash);
 * 
 * const passwordmatch = await bcrypt.compare("abcd@123", passwordHash);
 * console.log(passwordmatch);
 * }
 * securepassword("abcd@123");
 */
