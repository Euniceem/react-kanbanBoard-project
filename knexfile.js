// Update with your config settings.
<<<<<<< HEAD
require('dotenv').config({ path: './.env' })
=======
require('dotenv').config({ path: './env' });

>>>>>>> testdev
module.exports = {

  client: 'pg',
  connection: {
<<<<<<< HEAD
    host: process.env.POSTGRES_HOSTNAME,
=======
    host: process.env.POSTGRES_HOSTNAME_LOCAL,
>>>>>>> testdev
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: __dirname + '/knex/migrations',
  },
  seeds: {
    directory: __dirname + '/knex/seeds'
  }
<<<<<<< HEAD


=======
>>>>>>> testdev
};
