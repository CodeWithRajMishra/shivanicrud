const express = require("express");
const app=express();
const StuRoute= require("./routes/stuRoute");
const mongoose = require("mongoose");
const bodyparser = require('body-parser')
const cors = require("cors");
mongoose.connect("mongodb+srv://rajmishra3:SDCMgbv2AjB58lEU@cluster0.onm1rsc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("DB Connected!!!");
})
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors());
app.use("/students", StuRoute);
app.listen(8000, ()=>{
    console.log("Server Run on 8000! Port")
})