(function() {
	var backend = function($http) {
		var getRecentProjects = function() {
			return $http.get("http://backend.loganfarr.com/recent-portfolio.json")
						.then(function(response) { return response.data; });
		}

		var getProjects = function() {
			return $http.get("http://backend.loganfarr.com/portfolio.json")
						.then(function(response) { return response.data; });
		}

		var getRecentBlogPosts = function() {
			return $http.get("http://backend.loganfarr.com/recent-blog.json")
						.then(function(response) { return response.data; });
		}

		var getBlogPosts = function() {
			return $http.get("http://backend.loganfarr.com/blog.json")
						.then(function(response) { return response.data; });
		}

		return {
			getRecentProjects: 	getRecentProjects,
			getProjects: 		getProjects,
			getRecentBlogPosts: getRecentBlogPosts,
			getBlogPosts: 		getBlogPosts
		};
	}

	var module = angular.module("loganfarr");
	module.factory("backend", backend);
}());