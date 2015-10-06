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

        var getProject = function(nid) {
            return fetchData("projects/" + nid);
        }

        var getRecentBlogPosts = function() {
            return fetchData("recent-blog");
        };

        var getBlogPosts = function() {
            return fetchData("blog");
        };

        var getArticle = function(nid) {
            return fetchData("blog/article/" + nid);
        }

        return {
            getRecentProjects: getRecentProjects,
            getProjects: getProjects,
            getProject: getProject,
            getRecentBlogPosts: getRecentBlogPosts,
            getBlogPosts: getBlogPosts,
            getArticle: getArticle
        };
    }

    var module = angular.module("loganfarr");
    module.factory("backend", backend);
}());
