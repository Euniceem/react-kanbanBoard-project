const express = require('express');
const router = express.Router();
const Card = require('../../database/models/Card');
const User = require('../../database/models/User');

router.get('/', (req, res) => {
  Card.fetchAll({
    withRelated: ['priority', 'created', 'assigned', 'status']
  })
    .then((cards) => {
      return res.json(cards);
    })
    .catch(err => {
      res.json(err.detail);
    })
});

router.get('/users', (req, res) => {

  return User.fetchAll({
    columns: ['id', 'firstname']
  })
    .then((users) => {
      userList = users.models;
      users = [];

      userList.forEach(user => {
        const userData = {
          id: user.attributes.id,
          firstname: user.attributes.firstname
        }

        users.push(userData);
      });
      res.json(users);
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
      res.json(res.detail);
    });
});



router.put('/', (req, res) => {
  let id = req.params.id;
  const title = req.body.title;
  const body = req.body.body;
  const priority_id = req.body.priority_id;
  const status_id = req.body.status_id;
  const created_by = req.body.created_by;
  const assigned_to = req.body.assigned_to;

  return new Card({ id: id })
    .save({ title, body, priority_id, status_id, created_by, assigned_to })
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
      console.log('hit')
      return Card.fetchAll({
        withRelated: ['priority', 'status', 'created', 'assigned']
      })
        .then(cards => {
          console.log(cards)
          res.json(cards)
        })
    })
    .catch(err => {
      res.json(err.detail);
    })
});



module.exports = router;