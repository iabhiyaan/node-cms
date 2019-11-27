const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const hbs = require("express-handlebars");

const app = express();
const { mongoDBURL, PORT } = require("./config/config");
const defaultRoutes = require("./routes/defaultRoutes");

// Connect to DB
mongoose
	.connect(mongoDBURL, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then((res) => console.log(res))
	.catch((err) => console.log(err));

// configure express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Setup view engines to use handle bars
app.engine("handlebars", hbs({ defaultLayout: "default" }));
app.set("view engine", "handlebars");

// Routes
app.use("/", defaultRoutes);

// Listen on PORT
app.listen(PORT, () => {
	console.log("Server is running on port", PORT);
});
