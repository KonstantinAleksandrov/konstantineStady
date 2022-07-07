import { JsonDB } from 'node-json-db'
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'
import express from 'express'
const app = express()
app.use(express.json());
const port = 3000
const db = new JsonDB(new Config("shop", true, true, '/'));

app.get('/', (req, res) => {
  res.send(db.getData("/"))
})

app.get('/catalog', (req, res) => {
  res.send(db.getData("/catalog/"))
})

app.post('/catalog', (req, res) => {
  const newGood = req.body
  db.push("/catalog/" + newGood.name + '/', newGood);
  res.send(db.getData("/catalog/"))
})

app.delete('/catalog/:name', (req, res) => {
  const removedItem = req.params.name
  db.delete("/catalog/" + removedItem)
  res.send(db.getData("/catalog/"))
})


app.get('/card', (req, res) => {
  res.send(db.getData("/card/"))
})

app.post('/card', (req, res) => {
  const newCheckout = req.body
  db.push("/card/" + newCheckout.name + '/', newCheckout);
  res.send(db.getData("/card/"))
})

app.delete('/card/:name', (req, res) => {
  const removedItem = req.params.name
  db.delete("/card/" + removedItem)
  res.send(db.getData("/card/"))
})


app.listen(port, () => {
  const defaultData = db.getData("/")
  if(!defaultData.catalog || !defaultData.card) {
    db.push("/", {"catalog": {}, "card": {}});
  }
  console.log(`Example app listening on port ${port}`)
})