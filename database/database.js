const Sequelize = require('sequelize')

const connection = new Sequelize({
  host: "localhost",
  dialect: 'mysql',
  username: 'root',
  password: 'capudougmor',
  database: 'guiaperguntas',
  port: 3307,
  define: {
    timestamps: true,
    underscored: true,
  },
})

module.exports = connection