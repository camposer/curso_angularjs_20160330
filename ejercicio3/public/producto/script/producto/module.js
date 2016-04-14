var closure = function() {
	angular
		.module('producto', [ 'ngRoute' ])
		.config(function($routeProvider) {
			$routeProvider
				.when('/producto', {
					templateUrl: 'script/producto/view/index.html',
					controller: 'ProductoCtrl'
				});

		});

}

closure();