import {config} from "dotenv";
config(); // premier chose à faire

import express from 'express';
import {Request, Response} from "express";


const app = express();

app.get("/esgi", function (req:Request, res:Response){
    res.send("cool from express");
});

app.post('/', function (req: Request, rep:Response){
    rep.json({
        name:"esgi"
    });
});

app.get("/school/:name/:classroom",function (req :Request, resp :Response){
    const n = req.params.name;
    const cl = req.params.classroom;
    const query = req.query.lang || "en";// permet recupérer les paramss derière un query
    const {lang} = req.query;// permet recupérer les paramss derière un query
    resp.send("the name = " + n + "classe room" + cl + "lang" + query  + "lang " + lang );
})

app.post("/school",express.json(),function (req :Request, resp :Response){

    resp.json(req.body);
})



app.listen(process.env.PORT, function (){
    console.log("server started en port" + process.env.PORT);
})