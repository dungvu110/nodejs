import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {

    router.get("/", homeController.getHomePage);
    router.get("/about", homeController.getAboutMe);

    router.get("/crud", homeController.getCRUD);                //C (to create page)
    router.post("/post-crud", homeController.postCRUD);         //C
    router.get("/get-crud", homeController.displayGetCRUD);     //R (to view data)
    router.get("/edit-crud", homeController.getEditCRUD);       //U (to edit page)
    router.post("/put-crud", homeController.putCRUD);           //U
    router.get("/delete-crud", homeController.deleteCRUD);      //D


    router.get("/dungvu110", (req, res) => {
        return res.send("Hello World!");
    });

    return app.use("/", router);
}

module.exports = initWebRoutes;