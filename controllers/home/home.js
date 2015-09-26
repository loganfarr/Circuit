(function() {
	var HomeController = function($scope, $routeParams, backend, $log, $q, $http, $sce) {
		var onRecentProjects = function(data) {
			$scope.recentProjects = data;
		};

		var onRecentBlogPosts = function(data) {
			$scope.recentBlogPosts = data;
		};

		var onError = function(response) {
			$('.error-container').html("<div class='messages error'>Could not fetch the data. <br /><br />More information: <br />"+response+"</div>");
		};

		var onPost = function(data) {
			$scope.article = data.article[0];
			$scope.article.body_trusted = $sce.trustAsHtml($scope.article.body);
		}

		$scope.getPost = function(nid) {
			backend.getPost(nid).then(onPost, onError);
		}

		backend.getRecentProjects().then(onRecentProjects, onError);
		backend.getRecentBlogPosts().then(onRecentBlogPosts, onError);
	};


	var app = angular.module("loganfarr");
	app.controller("HomeController", HomeController);	
}());

