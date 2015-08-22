(function() {
	var BlogController = function($scope, $routeParams, backend, $log, $q, $http) {
		var onBlogPosts = function(data) {
			$scope.blog = data;
		}

		var onError = function(response) {
			$('.error-container').html("<div class='messages error'>Could not fetch the data. <br /><br />More information: <br />"+response+"</div>");
		}

		backend.getBlogPosts().then(onBlogPosts, onError);
	};

	var app = angular.module("loganfarr");
	app.controller("BlogController", BlogController);
}());