var app = angular.module('myapp', []);

app.controller('formcontroller', function() {
	this.data = {};
	this.submitForm = function() {
		console.dir(this.data);
	};
});