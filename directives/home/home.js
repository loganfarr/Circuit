(function() {
	var HomeController = function($scope, $routeParams, backend, $log, $q, $http) {
		var onRecentProjects = function(data) {
			// $log.info(data);
			// $log.info(JSON.stringify(data));
			$scope.recentProjects = data;
			$log.info($scope.recentProjects);
			$log.info(JSON.stringify($scope.recentProjects));
		}

		var onRecentBlogPosts = function(data) {
			$scope.recentBlogPosts = data;
			// $log.info($scope.recentBlogPosts);
			// $log.info(JSON.stringify($scope.recentBlogPosts));
		}

		var onError = function(response) {
			$('.error-container').html("<div class='messages error'>Could not fetch the data. <br /><br />More information: <br />"+response+"</div>");
		}

		// $scope.recentProjects = backend.getRecentProjects;
		// $log.info($scope.recentProjects);
		// $log.info(JSON.stringify($scope.recentProjects));
		// $q.when(backend.getRecentProjects).then(onRecentProjects, onError);
		backend.getRecentProjects().then(onRecentProjects, onError);

		// $http.get("http://backend.loganfarr.com/recent-blog").then(onRecentBlogPosts, onError);


	};
	var app = angular.module("loganfarr");
	app.controller("HomeController", HomeController);
}());

