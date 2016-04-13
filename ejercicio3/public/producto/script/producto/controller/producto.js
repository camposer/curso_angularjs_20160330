(function() {

	angular
		.module('producto')
		.controller('ProductoCtrl', 
			[  'ProductoService',  ProductoCtrl ]);

	function ProductoCtrl(productoService) {
		var self = this;

		self.productos = []; // opcional

		var listar = function() {
			var callback = function(res) {
				self.productos = res;
			};

			productoService.obtenerTodos(callback);
		};

		listar();

		self.eliminar = function(id) {
			productoService.eliminar(id, listar);
		};

		self.mostrar = function(p) {
			self.producto = p;
		}

		self.guardar = function() {
			var callback = function() {
				self.producto = {};
				listar();
			};

			productoService.agregar(self.producto, callback);
		}
	}

})();