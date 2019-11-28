const express = require("express");
const router = express.Router();

const { index, getPosts, submitPosts, createPosts } = require("../controller/adminController");

router.all("/*", (req, res, next) => {
	req.app.locals.layout = "admin";
	next();
});

router.route("/").get(index);

router.route("/posts").get(getPosts).post(submitPosts);
router.route("/posts/create").get(createPosts);
module.exports = router;
