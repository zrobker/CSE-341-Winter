const routes = require('express').Router();

const myController = require('../controllers');

routes.get('/all', myController. getAll);
routes.get('/:id', myController. getSingle);

module.exports = routes;