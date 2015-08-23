(function() {
	var backend = function($http, $q, $log) {
		var fetchData = function(url) {
			url = 'http://backend.loganfarr.com/'+url+'.json';

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
			return fetchData("recent-portfolio");
		};

		var getProjects = function() {
			return fetchData("portfolio");
		};

		var getProject = function(name) {
			// return fetchData("portfolio/" + name);
		}

		var getRecentBlogPosts = function() {
			return fetchData("recent-blog");
		};

		var getBlogPosts = function() {
			return fetchData("blog");
		};

		//Planning on restructuring either this function or the fetchData function so I can just use one 
		//for both or make this one different enough to justify having both.
		var getPost = function(nid) {
			return $http.get('http://backend.loganfarr.com/contentasjson/node/' + nid)
						.then(
							//Sucess function
							function(response) {
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
								$log.error('getPost returned an error');
								return $q.reject(response.data);
							}
			);
		}

		return {
			getRecentProjects: 	getRecentProjects,
			getProjects: 		getProjects,
			getProject:         getProject,
			getRecentBlogPosts: getRecentBlogPosts,
			getBlogPosts: 		getBlogPosts,
			getPost: 			getPost
		};
	}

	var module = angular.module("loganfarr");
	module.factory("backend", backend);
}());