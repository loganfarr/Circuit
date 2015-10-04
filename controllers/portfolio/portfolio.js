(function() {
	var PortfolioController = function($scope, $http, $routeParams, backend, $log) {
		var onProjects = function(data) {
			$scope.portfolio = data;
		}

		var onError = function(response) {
			$('.error-container').html("<div class='messages error'>Could not fetch the data. <br /><br />More information: <br />"+response+"</div>");
		};

		backend.getProjects().then(onProjects, onError);
	};

	var app = angular.module("loganfarr");
	app.controller("PortfolioController", PortfolioController);
}());