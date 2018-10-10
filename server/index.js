// IMPORTS
var restify = require('restify');
var routes = require('./api/routes');

// CONFIGS
var port = process.env.PORT || 5000;
var server = restify.createServer({ name: 'Backend SD' });

// SERVER
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

server.get('/toddy', routes.list);
server.get('/toddy/:id', routes.listById);
server.put('/toddy', routes.update);
server.post('/toddy', routes.insert);
server.del('/toddy', routes.exclude);

server.listen(port, function() { console.log('%s server started', server.name); });