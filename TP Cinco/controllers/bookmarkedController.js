const service = require('../services/libreriaService')
const self = {};


self.obtenerBookmarked = function(req,res,next){ // recuperara libros selccionados
	var bookmarked = (JSON.parse(req.body.info)).bookmarked;
	service.crearfav(bookmarked);
	res.send("se recibió la respuesta")
}

self.obtenerMarked = function(req,res,next){
	filtroLibro = service.libros()
	res.render('marked', {fav:service.fav()})
}


module.exports = self;