(function() {
	angular
		.module('producto')
		.service('ProductoService', 
			[ '$http', ProductoService ]);

	function ProductoService($http) {
		var BASE_URL = '/productos';

		this.obtenerTodos = function(callback) {
			$http.get(BASE_URL).success(callback);
		}

		this.eliminar = function(id, callback) {
			$http.delete(BASE_URL + '/' + id).success(callback);
		}

		this.agregar = function(p, callback) {
			$http.post(BASE_URL, p).success(callback);
		}
	}

})();