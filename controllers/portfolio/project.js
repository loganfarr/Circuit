(function() {
	var ProjectController = function($scope, $http, $routeParams, backend, $log, $sce) {
		var onProject = function(data) {
			var projectData = data;
			$scope.project = projectData[0].project;
			$log.info(JSON.stringify($scope.project));
			$scope.project.description = $sce.trustAsHtml($scope.project.description);
		}

		var onError = function(response) {
			$('.error-container').html("<div class='messages error'>Could not fetch the data. <br /><br />More information: <br />"+response+"</div>");
		};

		var projectID = $routeParams.projectID;

		backend.getProject(projectID).then(onProject, onError);
	};

	var app = angular.module("loganfarr");
	app.controller("ProjectController", ProjectController);
}());