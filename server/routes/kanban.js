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
  const title = req.body.title.trim();
  const body = req.body.body.trim();
  const priority_id = req.body.priority_id;
  const status_id = req.body.status_id;
  const created_by = req.body.created_by;
  const assigned_to = req.body.assigned_to;
  console.log('BODY', req.body);
  console.log(assigned_to)

  const card = {
    title: title ? title : null,
    body: body ? body : null,
    priority_id: priority_id ? priority_id : null,
    status_id: status_id ? status_id : null,
    created_by: created_by ? created_by : null,
    assigned_to: assigned_to ? assigned_to : null
  };
  return new Card(card)
    .save()
    .then(newCard => {
      return newCard.refresh({
        withRelated: ['priority', 'status', 'created', 'assigned']
      });
      // return res.json(newCard)
    })
    .then(card => {
      console.log('card', card);
      return res.json(card);
    })
    .catch(err => {
      console.log(err);
    });
});

// Card.forge({
//   title: title,
//   body: body,
//   priority: priority_id,
//   status: status_id,
//   created_by: created_by,
//   assigned_to: assigned_to
// })
//   .save(null, { method: 'insert' })
//   .then(() => {
//     res.redirect('/');
//   })


module.exports = router;