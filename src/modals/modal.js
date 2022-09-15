const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const menSchema = new mongoose.Schema({
    ranking:{
        type : Number
    },
    name:{
        type: String
    },
    dob:{
        type: String
    },
    country:{
        type: String
    },
    score:{
        type: String
    },
    event:{
        type: String,
        default: "100"
    },
    password:{
        type : String,
    },
    confirmpassword:{
        type: String
    },
    email:{
        type: String
    },
    tokens:[{
        token:{
        type: String,
        required:true
            }
    }]
})
 
// Converting password into hash
menSchema.pre("save", async function(next) {
    if(this.isModified("password")){
    console.log(`The current password is ${this.password}`);
    this.password = await bcrypt.hash(this.password,10);
    this.confirmpassword = await bcrypt.hash(this.confirmpassword,10);
}
next();
});


// Generating tokens
menSchema.methods.generateAuthToken = async function(){
    try{
        console.log("id is",this._id);
        const token = jwt.sign({_id:this._id.toString()},"bfhfsffvwbsfhwjefdwevwbfwuebhiefugbwei");
         this.tokens= this.tokens.concat({token:token})
         await this.save();
         return token;
    } catch(e){
        res.send("this is generating error "+e);
        console.log(e);
    }
}
 
const mensRanking = new mongoose.model("menRanking", menSchema);

module.exports = mensRanking;