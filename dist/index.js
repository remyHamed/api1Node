"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)(); // premier chose à faire
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/esgi", function (req, res) {
    res.send("cool from express");
});
app.post('/', function (req, rep) {
    rep.json({
        name: "esgi"
    });
});
app.get("/school/:name/:classroom", function (req, resp) {
    const n = req.params.name;
    const cl = req.params.classroom;
    const query = req.query.lang || "en"; // permet recupérer les paramss derière un query
    const { lang } = req.query; // permet recupérer les paramss derière un query
    resp.send("the name = " + n + "classe room" + cl + "lang" + query + "lang " + lang);
});
app.post("/school", express_1.default.json(), function (req, resp) {
    resp.json(req.body);
});
app.listen(process.env.PORT, function () {
    console.log("server started en port" + process.env.PORT);
});
//# sourceMappingURL=index.js.map