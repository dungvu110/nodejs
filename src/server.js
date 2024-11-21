import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine.js";
import initWebRoute from "./route/web.js";
require('dotenv').config();

let app = express();

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoute(app);

let port = process.env.PORT || 6969;
app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is running on the port: " + port);
});