const DbConn = require('../db/mysql-conn-factory');

class ToddyDao {
    constructor() {
        this._query = "";
        this._conn = DbConn.getConnection();
    }

    list() {
        this._query = `SELECT * FROM toddy`;
        return this._execQuery();
    }

    listById(id) {
        this._query = `SELECT * FROM toddy WHERE id = ${id}`;
        return this._execQuery();
    }

    update(toddy) {
        this._query = `UPDATE toddy 
            SET lote = ${toddy.lote}, conteudo = ${toddy.conteudo}, validade = ${toddy.validade} 
            WHERE id = ${toddy.id}`;
        return this._execQuery();
    }

    insert(toddy) {
        this._query = `INSERT INTO toddy (lote, conteudo, validade) 
            VALUES (${toddy.lote}, ${toddy.conteudo}, ${toddy.validade})`
        return this._execQuery();
    }

    delete(id) {
        this._query = `DELETE FROM toddy WHERE id = ${id}`
        return this._execQuery();
    }

    _execQuery() {
        console.log(`Query: ${this._query}`);
        return new Promise((resolve, reject) => {
            this._conn.query(this._query, function (err, rows, fields) {
                if (err) return reject(err);
                else return resolve(rows);
            });
            this._conn.end();
        });
    }
}

module.exports = ToddyDao;