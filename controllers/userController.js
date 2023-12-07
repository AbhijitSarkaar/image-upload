const userHomePage = (req, res) => {
    console.log("user details of ", req.params.id);
    res.render("pages/home");
};

module.exports = {
    userHomePage,
};
