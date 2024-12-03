const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

let items = []

app.post('/items', (req, res) => {
  const item = req.body
  items.push(item)
  res.status(201).send(item)
})

app.get('/items', (req, res) => {
  res.send(items)
})

app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id))
  if (!item) return res.status(404).send('Item not found')
  res.send(item)
})

app.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id))
  if (!item) return res.status(404).send('Item not found')

  Object.assign(item, req.body)
  res.send(item)
})

app.delete('/items/:id', (req, res) => {
  const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id))
  if (itemIndex === -1) return res.status(404).send('Item not found')

  const deletedItem = items.splice(itemIndex, 1)
  res.send(deletedItem)
})
