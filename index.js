const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const connection = require('./database/database')
const Pergunta = require('./database/Pergunta')

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
  Pergunta.findAll({raw: true}).then(perguntas => {
    res.render('index', {perguntas: perguntas})
  })
})

app.get("/perguntar", (req, res) => {
  res.render('perguntar')
})

app.post("/salvarpergunta", (req, res) => {
  let titulo = req.body.titulo
  let descricao = req.body.descricao
  Pergunta.create({
    titulo: titulo,
    descricao: descricao
  }).then(() => {
    res.redirect("/")
  })
})

app.listen(8080, ()=>{
  console.log('Servidor na porta 8080');  
})