(function() {
	var ArticleController = function($scope, $http, $routeParams, backend, $log, $sce) {
		var onArticle = function(data) {
			var articleData = data;
			$scope.article = articleData.article[0];
			$scope.article.summary = $sce.trustAsHtml($scope.article.summary);
			$scope.article.body = $sce.trustAsHtml($scope.article.body);
		}

		var onError = function(response) {
			$('.error-container').html("<div class='messages error'>Could not fetch the data. <br /><br />More information: <br />"+response+"</div>");
		};

		var articleID = $routeParams.articleID;

		backend.getArticle(articleID).then(onArticle, onError);
	};

	var app = angular.module("loganfarr");
	app.controller("ArticleController", ArticleController);
}());