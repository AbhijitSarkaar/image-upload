const { createToken } = require("../utils/auth");
const User = require("../models/usermodel");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const hash = bcrypt.hashSync(password, 10);
        const userData = {
            username,
            password: hash,
            images: ["/uploads/product-1.jpg"],
        };

        await User.create(userData)
            .then((createdUser) => {
                if (!createdUser) {
                    return res.status(404).json({
                        success: false,
                        message: "user not created",
                    });
                }

                res.status(201).json({
                    success: true,
                    _id: createdUser._id,
                    username: createdUser.username,
                    message: "user created",
                });
            })
            .catch((error) => {
                res.status(404).json({
                    success: false,
                    error: error.message,
                });
            });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
};

const loginPage = (req, res) => {
    res.render("pages/login");
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        await User.findOne({
            username,
        })
            .then((user) => {
                if (!user) {
                    return res.status(404).json({
                        success: false,
                        message: "user not found",
                    });
                } else if (bcrypt.compareSync(password, user.password)) {
                    const token = createToken({
                        _id: user._id,
                    });

                    return res.status(200).json({
                        success: true,
                        _id: user._id,
                        auth_token: token,
                        username: user.username,
                        message: "logged in",
                    });
                } else {
                    return res.status(400).json({
                        success: false,
                        message: "invalid password",
                    });
                }
            })
            .catch((error) => {
                res.status(404).json({
                    success: false,
                    message: error.message,
                });
            });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

const signupPage = (req, res) => {
    res.render("pages/signup");
};

const jwtverify = (req, res) => {
    res.status(200).json({
        success: true,
        _id: req.userId,
    });
};

module.exports = {
    loginPage,
    login,
    signupPage,
    register,
    jwtverify,
};
