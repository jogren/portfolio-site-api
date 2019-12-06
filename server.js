const express = require('express');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3000);

app.get('/', (request, response) => {
  response.send('Hello Portfolio Messages!');
});

app.get('/api/v1/messages', (request, response) => {
  database('messages').select()
    .then((messages) => {
      response.status(200).json(messages);
    })
    .catch((error) => {
      response.status(500).json({ error })
    })
})

app.listen(app.get('port'), () => {
  console.log(`Portfolio Site API is running on http://localhost:${app.get('port')}.`);
});