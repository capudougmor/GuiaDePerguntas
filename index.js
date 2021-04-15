const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const connection = require('./database/database')

//Database
connection.authenticate().then(function() {
  console.log("Conectado ao banco de dados!")
}).catch(function(erro) {
  console.log("Falha ao se conectar ao banco de dados: "+erro)
})

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.get("/", (req, res) => {
  res.render('index')
})

app.get("/perguntar", (req, res) => {
  res.render('perguntar')
})

app.post("/salvarpergunta", (req, res) => {
  let titulo = req.body.titulo
  let descricao = req.body.descricao
  res.send(`Forumario recebido: ${titulo} ${descricao} `)
})

app.listen(8080, ()=>{
  console.log('Servidor na porta 8080');  
})