const service = require('../services/libreriaService')
const self = {};

self.renderHome = function(req,res,next){
	filtroLibro = service.libros()
	res.render('home', {fav:service.fav()})
}

self.cargarVista = function(req,res,next){
	let miLibro = req.params.id;
	var libro = service.buscar(miLibro) //ver si existe el libro y crear vista, sino error
	if(libro){
		res.render('indexLibreria', {libro:libro});
	}else{
		res.render('error', {mensaje:"Ese libro no se encuentra disponible aun", detalle:"Podes sugerirlo por mail"});
	}
}

self.obtenerBookmarked = function(req,res,next){ // recuperara libros selccionados
	var bookmarked = (JSON.parse(req.body.info)).bookmarked;
	service.crearfav(bookmarked);
	res.send("se recibió la respuesta")
}

self.obtenerMarked = function(req,res,next){
	filtroLibro = service.libros()
	res.render('marked', {fav:service.fav()})
}

self.filtrarForm = function(req,res,next){//filtro por cada select
	var autor = req.body.autor.toLowerCase();
	var idioma = req.body.idioma.toLowerCase();
	var genero = req.body.genero.toLowerCase();

	if(autor!="todas"){
		filtroLibro = service.libros().filter(function(item){return item.autor.toLocaleLowerCase()===autor});
	}else{
		filtroLibro = service.libros();
	}
	if(idioma!="todas"){
		filtroLibro = filtroLibro.filter(function(item){return item.idioma.toLocaleLowerCase()===idioma})
	}
	if(genero!="todos"){
		filtroLibro = filtroLibro.filter(function(item){return item.genero.toLocaleLowerCase()===genero})
	}
	if(filtroLibro.length===0){
		res.render("error", {mensaje:"No se encontraron resultados", detalle:"Por favor verifica la seleccion y proba nuevamente"})
	}else{
	res.redirect('/biblioteca/filtro/1')
};	
}

self.renderizar = function(req,res,next){
	var cantPaginas = filtroLibro.length/4;
	if(!Number.isInteger(cantPaginas)){
		paginas = Math.floor(cantPaginas + 1)
	}else{
		paginas = cantPaginas
	}

	var arrayPaginas = Array(paginas).fill().map((e,i)=>i+1);
	var numeroParams = req.params.page 
	if(!isNaN(numeroParams) && numeroParams<=paginas && numeroParams>0){
		var numero= numeroParams - 1;
		console.log(numero)
		}else{
			res.render('error', {mensaje:"Esa pagina aun no existe", detalle:"Volve para atras y busca tu libro en las anteriores"}) 
		}
	
	var principioIntervalo = numero*4;
	var finIntervalo = principioIntervalo + 4;
	var librosPagina = filtroLibro.slice(principioIntervalo,finIntervalo) 
	
	res.render('index', {libros:librosPagina, paginas:arrayPaginas})
}

module.exports = self;