var express = require('express');
var router = express.Router();
var createError = require('http-errors')
var biliotecaController = require('../controllers/bibliotecaController');
var filtroController = require('../controllers/filtroController');
var bookmarkedController = require('../controllers/bookmarkedController');
var libroController = require('../controllers/libroController');

/*Gets*/
router.get('/', biliotecaController.renderHome);
router.get('/marked', bookmarkedController.obtenerMarked);
router.get('/ficha/:id', libroController.cargarVista);
router.get('/filtro/:page', filtroController.renderizar);


/*Posts*/
router.post('/filtro', filtroController.filtrarForm);
router.post('/fav', bookmarkedController.obtenerBookmarked);


module.exports = router;
