(function() {
	var app = angular.module("loganfarr", ["ngRoute"]);

	app.config(function($routeProvider, $compileProvider, $locationProvider){
		$routeProvider
			.when("/", {
				templateUrl: "/controllers/home/home.html",
				controller: "HomeController"
			})
			.when("/projects", {
				templateUrl: "/controllers/portfolio/portfolio.html",
				controller: "PortfolioController"
			})
			.when("/projects/:projectID", {
				templateUrl: "/controllers/portfolio/project.html",
				controller: "ProjectController"
			})
			.when("/blog", {
				templateUrl: "/controllers/blog/blog.html",
				controller: "BlogController"
			})
			.when("/blog/:articleID", {
				templateUrl: "/controllers/blog/article.html",
				controller: "ArticleController"
			})
			.when("/styleguide", {
				templateUrl: "/controllers/styleguide/styleguide.html",
				controller: "StyleGuideController"
			})
			.when("/about", {
				templateUrl: "/controllers/about/about.html",
				controller: "AboutController"
			})
			.when("/contact", {
				templateUrl: "/controllers/contact/contact.html",
				controller: "ContactController"
			})
			.when("/login", {redirectTo:"http://backend.loganfarr.com/user"})
			.otherwise({redirectTo:"/"});

		$compileProvider.debugInfoEnabled(false);
		
		// Use the HTML5 History API
		$locationProvider.html5Mode(true);
	}); 
}());