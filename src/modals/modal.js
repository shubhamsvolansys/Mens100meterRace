const express = require("express");
const mongoose = require("mongoose");

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
    }
})
 
const mensRanking = new mongoose.model("menRanking", menSchema);

module.exports = mensRanking;