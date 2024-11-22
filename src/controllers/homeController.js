import db from "../models/index.js";

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();     //the same as model name in user.js

        // console.log(data);
        // return res.send("hello world from controller");

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

module.exports = {
    getHomePage: getHomePage,
    getAboutMe: getAboutMe,
}