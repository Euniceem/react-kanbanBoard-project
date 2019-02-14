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
      res.json('error')
    })
});

router.post('/', (req, res) => {
  let body = req.body;
  console.log('BODY', req.body);

})

module.exports = router;