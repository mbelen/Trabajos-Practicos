var express = require('express');
var router = express.Router();
var bibliotecaController = require('../controllers/bibliotecaController');

/* GET home page. */
router.get('/', bibliotecaController.renderHome);

module.exports = router;
