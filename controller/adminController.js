module.exports = {
	index: (req, res, next) => {
		res.render("admin/index");
	},
	getPosts: (req, res, next) => {
		res.send("All Posts");
	},
	submitPosts: (req, res, next) => {
		res.send("Posts submitted");
	},
	createPosts: (req, res, next) => {
		res.render("admin/posts/create");
	}
};
