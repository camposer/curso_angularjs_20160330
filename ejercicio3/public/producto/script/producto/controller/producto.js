(function() {

	angular
		.module('producto')
		.controller('ProductoCtrl', 
			[  'ProductoService',  ProductoCtrl ]);

	function ProductoCtrl(productoService) {
		var self = this;

		self.producto = {} // enlazado con el form (opcional)
		self.productos = []; // enlazado con la tabla (opcional)

		var listar = function() {
			var callback = function(res) {
				self.productos = res.data;
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

		self.guardar = function(form) {
			self.error = [];

			if (form.nombre.$invalid)
				self.error.push('Nombre inválido');

			if (form.precio.$invalid || 
					self.producto.precio <= 0) {

				form.precio.$invalid = true;
				self.error.push('Precio inváildo');
			}

			if (self.error.length == 0) {
				var success = function() {
					self.producto = {};
					listar();
				};

				var error = function() {
					self.error.push('Ha ocurrido un error en el servidor');
				}

				if (self.producto.id) {
					productoService.modificar(self.producto, success, error);									
				} else {
					productoService.agregar(self.producto, success, error);				
				}
			}
		}
	}

})();