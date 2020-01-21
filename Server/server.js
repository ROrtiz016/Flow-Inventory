const app = require('express')()
const massive = require('massive')
const bodyParser = require('body-parser')
// const bcrypt = require('bcrypt')
// const saltRounds = 10; 
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';
require('dotenv').config()

app.use(bodyParser.json())

let{CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('Postgress Online')
})


// ADD ITEMS TO THE INVENTORY DB TABLE
app.post('/api/postItem', (req, res) => {
  const db = app.get("db")
  const {
    name, 
    serial, 
    specs, 
    quantity, 
    price,
    provider,
  } = req.body;

  db.items.insert({
    item_name: name,
    specs: specs,
    quantity: quantity,
    price_per_unit: price,
    provider: provider,
    serial_number: serial
  }).then(data => {
    res.status(200).send(data)
  })

})


// UPDATE ITEM IN THE INVENTORY TABLE DB
app.put('/api/updateItem/:id', (req, res) => {
  const db = app.get("db")
  const {
    name, 
    serial,
    category,
    description, 
    specs, 
    quantity, 
    price,
    provider,
  } = req.body;

  const id = req.params.id * 1

  db.items.update({
    id: id
  },{
    item_name: name,
    category: category,
    description: description,
    specs: specs,
    quantity: quantity,
    price_per_unit: price,
    provider: provider,
    serial_number: serial
  }).then(data => {
    res.status(200).send(data)
  })
})


// DELETE ITEMS FROM INVENTORY DB
app.delete(`/api/deleteItem/:id/:name`, (req, res) => {
  const db = app.get("db")
  db.items.destroy({
    id: req.params.id,
    item_name: req.params.name
  }).then(data => {
    res.status(200).send(data)
  })
})

// ADD PRODUCT TO INVENTORY
app.post(`/api/postProduct`, (req, res) => {
  const db = app.get('db')
  const {
    name, 
    serial, 
    category, 
    description,
    quantity, 
    price,
    provider,
  } = req.body;

  db.products.insert({
    product_name: name,
    category: category,
    description: description,
    quantity: quantity,
    price_per_unit: price,
    provider: provider,
    serial_number: serial
  })
  .then(data => {
    res.status(200).send(data)
})
})

// UPDATE PRODUCT FROM INVENTORY
app.put(`/api/updateProduct/:id`, (req, res) => {
  const db = app.get('db')
  const{
    name,
    serial,
    category,
    description,
    quantity,
    price,
    provider
  } = req.body

  db.products.update({
    id: req.params.id
  },{
    product_name: name,
    category: category,
    description: description,
    quantity: quantity,
    provider: provider,
    serial_number: serial,
    price_per_unit: price,
  })
  .then(data => {
    res.status(200).send(data)
})
})

// DELETE PRODUCTS FROM INVENTORY
app.delete(`/api/deleteProduct/:id/:name`, (req, res) => {
  const db = app.get('db')

  const {
    id,
    name
  } = req.params

  db.products.destroy({
    id: id,
    product_name: name
  })
  .then(data => {
    res.status(200).send(data)
})
})

// GET PRODUCTS LIST
app.get(`/api/getProducts`, (req, res) => {
  const db = app.get('db')

  db.products.find({
    
  })
})



app.listen(3010, () => console.log('Server online at port 3010'))
    
