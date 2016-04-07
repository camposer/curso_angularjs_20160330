function ProductoUtil() {
	var URL_BASE = '/productos';

	this.obtenerTodos = function(callback) {
		$.ajax(URL_BASE, {
			type: 'get',
			dataType: 'json' // tipo de dato devuelto por el servidor
		}).done(callback);
	}

	this.agregar = function(p, callback) {
		$.ajax(URL_BASE, {
			type: 'post',
			data: JSON.stringify(p),
			contentType: 'application/json'
		}).done(callback);
	}

	this.eliminar = function(id) {

	}

	this.obtener = function(id) {
	}

	this.modificar = function(p) {
		$.ajax(URL_BASE + '/' + p.id, {
			type: 'put',
			data: JSON.stringify(p),
			contentType: 'application/json'
		}).done(callback);
	}
}