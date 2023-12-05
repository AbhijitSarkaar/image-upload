const express = require("express");
const routes = require("./routes/uploadRoutes");
const authRoutes = require("./routes/authRoutes");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", routes);
app.use("/auth", authRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});
