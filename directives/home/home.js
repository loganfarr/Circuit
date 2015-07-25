(function() {
	var HomeController = function($scope, $routeParams, backend, $log, $q) {
		var onRecentProjects = function(data) {
			$scope.recentProjects = data;
		}

		var onRecentBlogPosts = function(data) {
			$scope.recentBlogPosts = data;
			$log.info($scope.recentBlogPosts);
			$log.info(JSON.stringify($scope.recentBlogPosts));
		}

		var onError = function(response) {
			$('.error-container').html("<div class='messages error'>Could not fetch the data. <br /><br />More information: <br />"+response+"</div>");
		}

		$q.when(backend.getRecentProjects).then(onRecentProjects, onError);
		$q.when(backend.getRecentBlogPosts).then(onRecentBlogPosts, onError);


	};
	var app = angular.module("loganfarr");
	app.controller("HomeController", HomeController);
}());

