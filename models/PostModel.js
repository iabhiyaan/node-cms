const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = Schema({
	title: {
		type: String,
		required: true
	},
	status: {
		type: String,
		default: "public"
	},
	description: {
		type: String,
		required: true
	},
	created_at: {
		type: Date,
		required: Date.now()
	}
});
