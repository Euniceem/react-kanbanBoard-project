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
<<<<<<< HEAD
      res.json(res.detail);
=======
      res.json(err.detail);
>>>>>>> redux
    })
});

router.post('/', (req, res) => {

  const title = req.body.title;
  const body = req.body.body;
  const priority_id = req.body.priority_id;
  const status_id = req.body.status_id;
  const created_by = req.body.created_by;
  const assigned_to = req.body.assigned_to;

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
    })
    .then(card => {
      return res.json(card);
    })
    .catch(err => {
<<<<<<< HEAD
      res.json(res.detail);
    });
});

=======
      res.json(err.detail);
    });
});

router.get('/:id', (req, res) => {
  let id = req.params.id;

  return Card.query.where({ id: id })
    .fetchAll({
      withRelated: ['priority', 'status', 'created', 'assigned']
    })
    .then(card => {
      return res.json(card)
    })
    .catch(err => {
      res.json(err.detail);
    })
});

router.put('/', (req, res) => {
  let id = parseInt(req.params.id);
  let title = req.bodu.title;
  let body = req.body.body;
  let priority_id = parseInt(req.body.priority_id);
  let created_by = parseInt(req.body.created_by);
  let assigned_to = parseInt(req.body.assigned_to);

  return new Card.where({ id: id })
    .save({ title, body, priority_id, created_by, assigned_to })
    .then(card => {
      res.json(card)
    })
    .catch(err => {
      res.json(err.detail);
    })
});

router.delete('/', (req, res) => {
  let id = req.params.id

  return new Card({ id: id })
    .destroy()
    .then(cards => {
      return Card.fetchAll({
        withRelated: ['priority', 'status', 'created', 'assigned']
      })
        .then(cards => {
          res.json(cards)
        })
    })
    .catch(err => {
      res.json(err.detail);
    })
});
>>>>>>> redux

module.exports = router;