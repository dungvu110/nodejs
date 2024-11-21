import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {

    router.get("/", homeController.getHomePage);
    router.get("/about", homeController.getAboutMe);

    router.get("/dungvu110", (req, res) => {
        return res.send("Hello World!");
    });

    return app.use("/", router);
}

module.exports = initWebRoutes;