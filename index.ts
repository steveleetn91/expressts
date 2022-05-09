import express from "express"; 
import WebApplication from "./routers/web";
import * as core from 'express-serve-static-core';
/**
 * Fs library 
 */
const fs = require("fs");
/**
 * Support env 
 */
require('dotenv').config()
const app : core.Express = express();
/**
 * Set view engine
 */
app.set('view engine', 'ejs');
app.set('views', './resources/views');
const viewHelp : string = fs.readFileSync("./helpes/view.txt",{encoding:'utf8', flag:'r'});
console.log(viewHelp);
/**
 * Example router
 */
app.get("/",(req : any,res : any) => {
    res.render("index");
});
/**
 * Web router 
 */
(new WebApplication(app)).init();
app.listen(process.env.PORT as string);
let ServePortHelp : string = fs.readFileSync("./helpes/http.txt",{encoding:'utf8', flag:'r'});
ServePortHelp = ServePortHelp.replace("{PORT}",process.env.PORT as string);
console.log(ServePortHelp);