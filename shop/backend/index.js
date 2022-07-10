import { JsonDB } from 'node-json-db'
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'
import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
const port = 900
const db = new JsonDB(new Config("shop", true, true, '/'));

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use(express.json())

app.get('/', (req, res) => {
  res.send(db.getData("/"))
})

app.get('/catalog', (req, res) => {
  res.send(db.getData("/catalog/"))
})

app.post('/catalog', (req, res) => {
  const newGood = req.body
  if(newGood.name) {
    db.push("/catalog/" + newGood.name + '/', newGood);
    res.send(db.getData("/catalog/"))
  } else {
    res.status(400).send("name is required")
  }
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
  db.push("/card[]", newCheckout, true);
  res.send(db.getData("/card/"))
})

app.delete('/card/:key', (req, res) => {
  const removedItem = req.params.key
  db.delete(`/card[${removedItem}]`);
  res.send(db.getData("/card"))
})


app.listen(port, () => {
  const defaultData = db.getData("/")
  if(!defaultData.catalog || !defaultData.card) {
    db.push("/", {"catalog": {}, "card": []});
  }
  console.log(`Example app listening on port ${port}`)
})