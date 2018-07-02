const service = require('../services/libreriaService')
const self = {};


self.cargarVista = function(req,res,next){
	let miLibro = req.params.id;
	var libro = service.buscar(miLibro) //ver si existe el libro y crear vista, sino error
	if(libro){
		res.render('indexLibreria', {libro:libro});
	}else{
		res.render('error', {mensaje:"Ese libro no se encuentra disponible aun", detalle:"Podes sugerirlo por mail"});
	}
}

module.exports = self;