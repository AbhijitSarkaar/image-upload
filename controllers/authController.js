const loginPage = (req, res) => {
    res.render("pages/login");
};

const login = (req, res) => {
    console.log(req.body);
    res.json({
        message: "logged in ",
    });
};

module.exports = {
    loginPage,
    login,
};
