"use strict";

const User = require("../model.js").User;

function createUser(params) {
	return new Promise((resolve, reject) => {
		let newUser = new User(params);
		newUser.save().then((result) =>{
			resolve(result)
		}).catch((err) =>{
			reject(err)
		});
	});
}

function getUser(id) {
	return new Promise((resolve, reject) => {
		User.find({id: id}).then((result) => {
			resolve(result);
		}).catch((err) => {
			reject(err);
		});
	});
}

function listUsers(){
	return new Promise((resolve, reject) => {
		User.find().then((result) => {
			resolve(result);
		}).catch((err) => {
			reject(err);
		});
	});
}

function updateUser(id, params) {
	return new Promise((resolve, reject) => {
		User.findOneAndUpdate({id: id}, params, {upsert: true, new: true}).then((result) => {
			resolve(result);
		}).catch((err) => {
			reject(err);
		});
	});
}

function deleteUser(id) {
	return new Promise((resolve, reject) => {
		User.findOneAndRemove({id: id}).then((result) => {
			resolve(result);
		}).catch((err) => {
			reject(err);
		});
	});
}

const helperObj = {
	createUser: createUser,
	getUser   : getUser,
	listUsers : listUsers,
	updateUser: updateUser,
	deleteUser: deleteUser
};

module.exports = helperObj