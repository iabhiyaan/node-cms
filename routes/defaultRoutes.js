const express = require("express");
const router = express.Router();

const { index, login, loginPost, about, register, registerPost } = require("../controller/defaultController");

router.all("/*", (req, res, next) => {
	req.app.locals.layout = "default";
	next();
});

router.route("/").get(index);
router.route("/login").get(login).post(loginPost);
router.route("/about").get(about);
router.route("/register").get(register).post(registerPost);

module.exports = router;
