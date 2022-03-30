import {config} from "dotenv";
config(); // premier chose à faire

import express from 'express';
import {Request, Response} from "express";


const app = express();

app.get("/esgi", function (req:Request, res:Response){
    res.send("cool from express");
});

app.listen(process.env.PORT, function (){
    console.log("server started en port" + process.env.PORT);
})