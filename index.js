const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
  let name = req.params.name
  let lang = req.params.lang
  let exibirMsg = false

  let produtos = [
    {name: 'Doritos', price: 6.50},
    {name: 'Coca-cola', price: 8.00},
    {name: 'Leite', price: 3.00},
  ]
  res.render('index', {
    name, lang, exibirMsg, produtos
  })
})

app.listen(8080, ()=>{
  console.log('Servidor na porta 8080');  
})