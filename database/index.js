const config = require('../knexfile');
const environment = process.env.NODE_ENV || 'development' //remove
module.exports = require('knex')(config[environment]);
// module.exports = require('knex')(config);
