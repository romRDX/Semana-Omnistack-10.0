const { Router } = require('express');
const DevContoller = require('./controllers/DevController');
const SearchContoller = require('./controllers/SearchController');

const routes = Router();

// Metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros
//  Query Params: request.query ( Filtros, ordenação, paginação, ...)
//  Route Params: request.params ( Identificar um recurso na alteração ou remoção )
//  Bodya

// MongoDB ( Não-Relacional )

routes.get('/devs', DevContoller.index);

routes.post('/devs', DevContoller.store);

routes.get('/search', SearchContoller.index)

module.exports = routes;