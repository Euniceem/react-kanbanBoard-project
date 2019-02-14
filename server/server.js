const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const redis = require('connect-redis')(session);
const kanban = require('./routes/kanban')


const PORT = process.env.PORT || 8080;
const ENV = process.env.NODE_ENV || 'development';
const SESSION_SECRET = process.env.SESSION_SECRET
// app.use(session({
//   store: new redis({ url: 'redis://redis-server:REDIS_HOST_PORT', logErrors: true }),
//   secret: SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false,
//   // cookie: { secure: ENV === 'production' }

// }));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', kanban);
// app.use(express.static('public'));

app.get('/', (req, res) => {
  return res.send('smoke test');
});


app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
  console.log('This is docker!')
});