const express = require('express');
const router = express.Router();
const Card = require('../../database/models/Card');


router.get('/', (req, res) => {
  Card.fetchAll({
    withRelated: ['priority', 'created', 'assigned', 'status']
  })
    .then((cards) => {
      return res.json(cards);
    })
    .catch(err => {
      return res.json(err.message)
    })
});

router.post('/', (req, res) => {

})

module.exports = router;