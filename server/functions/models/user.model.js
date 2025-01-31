const mongoose = require("mongoose");

const User = new mongoose.Schema(
	{
		_id: {type: Number, required: true},
		store_name: { type: String, required: true, unique: true },
		static: {
			email: { type: String, required: true, unique: true },
			address: { type: String, required: true },
			capacity: { type: Number, required: true },
			password: { type: String, required: true },
			description: { type: String, required: false },

			hours: {
				open: { type: String, required: false },
				close: { type: String, required: false },
			},
		},
		dynamic: {
			wait_time_avg: { type: Number, default: 5 },
			is_line_open: { type: Boolean },
			in_store: {type: Number, default: 0},
			queue: [],
		},
	},
	{ collection: "user-data" }
);

const model = mongoose.model("UserData", User);

module.exports = model;
