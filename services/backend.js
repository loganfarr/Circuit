(function() {
	var backend = function($http, $q) {
		var fetchData = function(url) {
			return $http.get(url)
						.then(
							//Success Function
							function(response) {
								$log.info("Success function fired");
								if(typeof response.data === 'object') {
									return response.data;
								}
								else {
									//Invalid response
									return $q.reject(response.data);
								}
							},
							//Error function
							function(response) {
								$log.error("Error function fired")
								//Something went wrong
								return $q.reject(response.data);
							}
						);
		};

		var getRecentProjects = function() {
			// return $http.get("http://backend.loganfarr.com/recent-portfolio.json");;;
			// $log.info("Getting recent projects");
			// return fetchData("http://backend.loganfarr.com/recent-portfolio.json");

			return $http.get("http://backend.loganfarr.com/recent-portfolio")
						.then(function(response) {
							return response.data;
						});
		};

		var getProjects = function() {
			// return $http.get("http://backend.loganfarr.com/portfolio.json")
			// 			.then(function(response) { return response.data; });
		
			return fetchData("http://backend.loganfarr.com/portfolio");
		};

		var getRecentBlogPosts = function() {
			// return $http.get("http://backend.loganfarr.com/recent-blog.json")
			// 			.then(function(response) { return response.data; });

			return fetchData("http://backend.loganfarr.com/recent-blog");
		};

		var getBlogPosts = function() {
			// return $http.get("http://backend.loganfarr.com/blog.json")
			// 			.then(function(response) { return response.data; });

			return fetchData("http://backend.loganfarr.com/blog");
		};

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