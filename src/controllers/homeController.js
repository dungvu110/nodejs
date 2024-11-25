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

let displayGetCRUD = async (req, res) => {
    let data = await CRUDservice.getAllUser();

    return res.render("test/displayCRUD.ejs", {
        dataTable: data,
    });
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDservice.getUserInfoById(userId);

        if (userData) {
            res.render("test/editCRUD.ejs", {
                user: userData,
            });
        }
    }
    else {
        return res.send("User not found");
    }
}

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDservice.updateUserData(data);

    return res.render("test/displayCRUD.ejs", {
        dataTable: allUsers,
    });
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDservice.deleteUserById(id);
        return res.send("Deleted");
    }
    else {
        return res.send("User not found");
    }
}

module.exports = {
    getHomePage: getHomePage,
    getAboutMe: getAboutMe,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
}