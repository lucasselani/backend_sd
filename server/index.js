// IMPORTS
var restify = require('restify');
var mysql = require('mysql');

// CONFIGS
var port = process.env.PORT || 5000;
var server = restify.createServer({
    name: 'Backend SD'
});
var con = {
    host: process.env.DATABASE_HOST || '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'ec021',
    insecureAuth : true
}

// ENDPOINT FUNCTIONS
function getList(req, res, next) {
    res.setHeader('content-type', 'application-json');
    res.charSet('UTF-8');

    var connection = mysql.createConnection(con);
    connection.connect();

    var strQuery = `SELECT * FROM toddy`;

    connection.query(strQuery, function(err, rows, fields) {
        if(!err) {
            res.json(rows);
        } else {
            res.json(err);
        }
    });

    connection.end();
    next();
}

function update(req, res, next) {

}

function insert(req, res, next) {
    res.setHeader('content-type', 'application-json');
    res.charSet('UTF-8');
    var toddy = {
        lote: req.body.lote,
        conteudo: req.body.conteudo,
        validade: req.body.validade
    }

    var connection = mysql.createConnection(con);
    connection.connect();

    var strQuery = `INSERT INTO toddy (lote, conteudo, validade) 
        VALUES (${toddy.lote}, ${toddy.conteudo}, ${toddy.validade})`;

        connection.query(strQuery, function(err, rows, fields) {
        if(!err) {
            res.json(rows);
        } else {
            res.json(err);
        }
    });

    connection.end();
    next();
}

function exclude(req, res, next) {

}

// SERVER
server.use(restify.plugins.bodyParser());
server.get('/crud/listar', getList);
server.post('/crud/atualizar', update);
server.post('/crud/inserir', insert);
server.post('/crud/excluir', exclude);
server.listen(port, function() {
    console.log('%s server started', server.name);
});