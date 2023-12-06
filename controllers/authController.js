const loginPage = (req, res) => {
    res.render("pages/login");
};

const login = (req, res) => {
    console.log(req.body);
    res.json({
        message: "logged in ",
    });
};

const signupPage = (req, res) => {
    res.render("pages/signup");
};

const register = (req, res) => {
    res.json({
        message: "user created ",
    });
};

module.exports = {
    loginPage,
    login,
    signupPage,
    register,
};
