'use strict';
var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('category', {
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    value: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
