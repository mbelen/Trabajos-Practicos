var express = require('express');
var router = express.Router();
var createError = require('http-errors')
var biliotecaController = require('../controllers/bibliotecaController');

/*Gets*/
router.get('/', biliotecaController.renderHome);
router.get('/marked', biliotecaController.obtenerMarked);
router.get('/ficha/:id', biliotecaController.cargarVista);
router.get('/filtro/:page', biliotecaController.renderizar);


/*Posts*/
router.post('/filtro', biliotecaController.filtrarForm);
router.post('/fav', biliotecaController.obtenerBookmarked);


module.exports = router;
