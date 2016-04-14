(function() {
	angular
		.module('app', [ 
			'producto',
			'ngRoute' 
		])
		.config(function($routeProvider) {
			$routeProvider
				.when('/inicio', {
					template: '<strong>Página de inicio</strong>'
				});

			$routeProvider.otherwise('/inicio');
		});	
})();