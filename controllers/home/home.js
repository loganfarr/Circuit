(function() {
	var HomeController = function($scope, $routeParams, backend, $log, $q, $http, $sce) {
		var onRecentProjects = function(data) {
			$scope.recentProjects = data;
		};

		var onRecentBlogPosts = function(data) {
			$scope.recentBlogPosts = data;

			angular.forEach(data, function(post, key) {
				post.shownMore = false;
				post.body = $sce.trustAsHtml(post.body);
			});
		};

		var onError = function(response) {
			$('.error-container').html("<div class='messages error'>Could not fetch the data. <br /><br />More information: <br />"+response+"</div>");
		};

		var onPost = function(data) {}

		$scope.getPost = function(context, nid) {
			context.post.shownMore = true;

			backend.getPost(nid).then(function(data) {
				context.post.body = $sce.trustAsHtml(data.article[0].body);
			}, onError);
		}

		$scope.showLess = function(context, nid) {
			$log.info(context);

			context.post.shownMore = false;

			backend.getPost(nid).then(function(data) {
				context.post.body = $sce.trustAsHtml(data.summary);
			}, onError);
		}

		backend.getRecentProjects().then(onRecentProjects, onError);
		backend.getRecentBlogPosts().then(onRecentBlogPosts, onError);
	};


	var app = angular.module("loganfarr");
	app.controller("HomeController", HomeController);	
}());

