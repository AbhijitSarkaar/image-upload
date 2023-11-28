const express = require("express");
const routes = require("./routes/uploadRoutes");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", routes);

app.listen(3000, () => {
    console.log("listening to port 3000");
});
