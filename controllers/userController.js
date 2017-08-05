"use strict";

const createUser = require(__dirname + "/../helpers/users.js").createUser;
const getUser = require(__dirname + "/../helpers/users.js").getUser;
const listUsers = require(__dirname + "/../helpers/users.js").listUsers;
const updateUser = require(__dirname + "/../helpers/users.js").updateUser;
const deleteUser = require(__dirname + "/../helpers/users.js").deleteUser;

const config = require("config");

module.exports = function(app) { 
	app.post("/users", (req, res) => {
		var options = req.body;
		createUser(options).then((result) => {
			res.json(result);
		}).catch((error) => {
			console.log(error);
		});
	});

	app.get("/users/:id", (req, res) => {
		getUser(req.params.id).then((result) => {
			res.json(result);
		}).catch((error) => {
			console.log(error);
		});
	});

	app.get("/users", (req, res) => {
		listUsers().then((result) => {
			res.json(result);
		}).catch((error) => {
			console.log(error);
		});
	});

	app.put("/users/:id", (req, res) => {
		var params = req.body
		updateUser(req.params.id, params).then((result) => {
			res.json(result);
		}).catch((error) => {
			console.log(error);
		});
	});

	app.delete("/users/:id", (req, res) => {
		deleteUser(req.params.id).then((result) => {
			res.json("User Successfully deleted");
		}).catch((error) => {
			console.log(error)
		});
	});
};