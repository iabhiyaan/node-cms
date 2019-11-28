module.exports = {
	index: (req, res, next) => {
		res.render("default/index");
	},
	about: (req, res, next) => {
		res.send("About Page");
	},
	login: (req, res, next) => {
		res.render("default/login");
	},
	loginPost: (req, res, next) => {
		res.send("Submitted");
	},
	register: (req, res, next) => {
		res.render("default/register");
	},
	registerPost: (req, res, next) => {
		res.send("Registered");
	}
};
