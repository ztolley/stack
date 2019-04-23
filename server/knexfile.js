const path = require('path')

module.exports = {
  client: 'pg',
  connection: process.env.FUEL_DATABASE_URL || {
    host: '127.0.0.1',
    port: '54320',
    user: 'stack',
    password: 'password',
    database: 'stack',
  },
  migrations: {
    directory: path.join(__dirname, 'src', 'db', 'migrations'),
  },
  seeds: {
    directory: path.join(__dirname, 'src', 'db', 'seeds'),
  },
}
