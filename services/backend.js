(function() {
    var backend = function($http, $q, $log) {
        var fetchData = function(url) {
            url = 'http://backend.loganfarr.com/' + url + '.json';

            return $http.get(url)
                .then(
                    //Success Function
                    function(response) {
                        if (typeof response.data === 'object') {
                            return response.data;
                        } else {
                            //Invalid response
                            return $q.reject(response.data);
                        }
                    },
                    //Error function
                    function(response) {
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

        var getPost = function(nid) {
            return fetchData("blog/article/" + nid);
        }

        return {
            getRecentProjects: getRecentProjects,
            getProjects: getProjects,
            getProject: getProject,
            getRecentBlogPosts: getRecentBlogPosts,
            getBlogPosts: getBlogPosts,
            getPost: getPost
        };
    }

    var module = angular.module("loganfarr");
    module.factory("backend", backend);
}());
