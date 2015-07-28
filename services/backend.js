(function() {
	var backend = function($http, $q, $log) {
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
			// return fetchData("http://backend.loganfarr.com/recent-portfolio.json");

			var deferred = $q.defer();

			$http.get("http://backend.loganfarr.com/recent-portfolio").then(
				function(response) {
					return deferred.resolve(response.data);
				},
				function(response) {
					deferred.reject();
				}
			);

			return deferred.promise;
		};

		var getProjects = function() {
			// return $http.get("http://backend.loganfarr.com/portfolio.json")
			// 			.then(function(response) { return response.data; });
		
			return fetchData("http://backend.loganfarr.com/portfolio");
		};

		var getProject = function(name) {
			return fetchData("htpt://backend.loganfarr.com/portfolio/" + name);
		}

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
			getProject:         getProject,
			getRecentBlogPosts: getRecentBlogPosts,
			getBlogPosts: 		getBlogPosts
		};
	}

	var module = angular.module("loganfarr");
	module.factory("backend", backend);
}());