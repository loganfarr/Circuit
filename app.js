(function() {
	var app = angular.module("loganfarr", ["ngRoute"]);

	app.config(function($routeProvider, $compileProvider){
		$routeProvider
			.when("/", {
				templateUrl: "directives/home/home.html",
				controller: "HomeController"
			})
			.when("/portfolio", {
				templateUrl: "directives/portfolio/portfolio.html",
				controller: "PortfolioController"
			})
			.when("/portfolio/:projectName", {
				templateUrl: "directives/portfolio/project.html",
				controller: "ProjectController"
			})
			.when("/blog", {
				templateUrl: "directives/blog/blog.html",
				controller: "BlogController"
			})
			.when("/blog/:articleName", {
				templateUrl: "directives/blog/article.html",
				controller: "ArticleController"
			})
			.when("/clients", {
				templateUrl: "directives/client/clientBase.html",
				controller: "clientBaseController"
			})
			.when("/client/:clientName",{
				templateUrl: "directives/client/client.html",
				controller: "ClientController"
			})
			.when("/content/:pageName", {
				templateUrl: "directives/page/page.html",
				controller: "PageController"
			})
			.when("/styleguide", {
				templateUrl: "directives/styleguide/styleguide.html",
				controller: "StyleGuideController"
			})
			.otherwise({redirectTo:"/"});

		$compileProvider.debugInfoEnabled(false);
	}); 
}());