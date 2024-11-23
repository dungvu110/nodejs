import db from "../models/index.js";
import CRUDservice from "../services/CRUDservice.js";

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();     //the same as model name in user.js

        return res.render("homepage.ejs", {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }
}

let getAboutMe = (req, res) => {
    // return res.send("hello world from controller");
    return res.render("test/about.ejs");
}

let getCRUD = (req, res) => {
    return res.render("test/crud.ejs");
}

let postCRUD = async (req, res) => {
    let message = await CRUDservice.createNewUser(req.body);
    console.log(message);
    return res.send('postCRUD from server');
}

module.exports = {
    getHomePage: getHomePage,
    getAboutMe: getAboutMe,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}