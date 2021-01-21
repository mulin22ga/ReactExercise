const express = require('express')
const router = express.Router()

let data = [
  'Finalize project',
  'Book ticket to London',
  'Finish last article',
  'Get a new t-shirt',
  'Create dinner reservation'
]

router.get('/', function (req, res) {
  res.status(200).json(data)
})

router.get('/:id', function (req, res) {
  const found = data.find(function (item) {
    return item.id === parseInt(req.params.id)
  })

  if (found) {
    res.status(200).json(found)
  } else {
    res.sendStatus(404)
  }
})

router.put('/save', function (req, res) {
  console.log(req.body)
  if (req.body.data) {
    data = req.body.data
    res.sendStatus(204)
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
