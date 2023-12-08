const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"].split(" ")[1];
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({
                    message: "invalid token",
                });
            }
            req.userId = user._id;
            next();
        });
    } else {
        return res.status(403).json({
            message: "invalid token",
        });
    }
};

module.exports = {
    verifyToken,
};
