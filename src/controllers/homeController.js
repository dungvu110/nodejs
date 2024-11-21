
let getHomePage = (req, res) => {
    // return res.send("hello world from controller");
    return res.render("homepage.ejs");
}

let getAboutMe = (req, res) => {
    // return res.send("hello world from controller");
    return res.render("test/about.ejs");
}

module.exports = {
    getHomePage: getHomePage,
    getAboutMe: getAboutMe,
}