const ToddyDao = require('../dao/toddy-dao');

module.exports = {
    list: function (req, res, next) {
        new ToddyDao().list()
            .then(rows => res.json(rows))
            .catch(err => res.json(err));
    },

    listById: function (req, res, next) {
        if (req.params.id != null) {
            new ToddyDao().listById(req.params.id)
                .then(rows => res.json(rows))
                .catch(err => res.json(err));
        } else {
            res.json({
                error: "No id"
            });
        }
    },

    update: function (req, res, next) {
        var toddy = {
            lote: req.body.lote != null ? req.body.lote : "null",
            conteudo: req.body.conteudo != null ? req.body.conteudo : 0,
            validade: req.body.validade != null ? req.body.validade : "null",
            id: req.body.id != null ? req.body.id : 0
        }

        if (toddy.id != 0) {
            new ToddyDao().update(toddy)
                .then(rows => res.json(rows))
                .catch(err => res.json(err));
        } else {
            res.json({
                error: "No id"
            });
        }
    },

    insert: function (req, res, next) {
        var toddy = {
            lote: req.body.lote != null ? req.body.lote : "null",
            conteudo: req.body.conteudo != null ? req.body.conteudo : 0,
            validade: req.body.validade != null ? req.body.validade : "null"
        }
        new ToddyDao().insert(toddy)
            .then(rows => res.json(rows))
            .catch(err => res.json(err));
    },

    exclude: function (req, res, next) {
        if (req.body.id != null != 0) {
            new ToddyDao().delete(req.body.id)
                .then(rows => res.json(rows))
                .catch(err => res.json(err));
        } else {
            res.json({
                error: 'No id'
            });
        }
    }
}