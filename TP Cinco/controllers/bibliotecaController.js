const service = require('../services/libreriaService')
const self = {};

self.renderHome = function(req,res,next){
	filtroLibro = service.libros()
	res.render('home', {fav:service.fav()})
}

module.exports = self;