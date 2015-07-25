(function() {
	var HomeController = function($scope, $routeParams, backend, $log) {
		var onRecentProjects = function(data) {
			$scope.recentProjects = data;
		}

		var onRecentBlogPosts = function(data) {
			$scope.recentBlogPosts = data;
		}

		var onError = function(response) {
			$('.error-container').html("<div class='messages error'>Could not fetch the data. <br /><br />More information: <br />"+response+"</div>");
		}

		// backend.getRecentProjects.$promise.then(onRecentProjects, onError);
		var recentProjectData = backend.getRecentProjects;
		// backend.getRecentBlogPosts.$promise.then(onRecentBlogPosts, onError);
		var recentBlogPostData = backend.getRecentBlogPosts;
		$log.info(JSON.stringify(recentProjectData));
		$log.info(JSON.stringify(recentBlogPostData));
	};
	var app = angular.module("loganfarr");
	app.controller("HomeController", HomeController);
}());

