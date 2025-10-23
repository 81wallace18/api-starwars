const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Ola Turma SofTex LCPA 09 -PA de FrontEND!')
})

app.listen(port, () => {
  console.log(`Servidor escutando Porta ${port}`)
})
