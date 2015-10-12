(function() {
	var MenuController = function($scope, $location) {
		$scope.getActive= function(path) {
			if($location.path().substr(0, path.length) === path)
				return 'active';
			else
				return '';
		};
	};



	var app = angular.module("loganfarr");
	app.controller("MenuController", MenuController);
}());