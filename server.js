const express = require("express");
const routes = require("./routes/uploadRoutes");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./db/db");
const dotenv = require("dotenv");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", routes);
app.use(
    "/auth",
    (req, res, next) => {
        console.log("/auth", req.body);
        next();
    },
    authRoutes
);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});
