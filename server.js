const express = require('express');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3000);
app.use(express.json());

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

app.post('/api/v1/messages', (request, response) => {
  const message = request.body;

  for(let requiredParameter of ["name", "email", "message"]) {
    if(!message[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { name: <string>, email: <string>, message: <string> }. You are missing the ${requiredParameter} property.` })
    }
  }

  database('messages').insert(message, 'id')
    .then((message) => {
      response.status(201).json({ id: message[0] })
    })
    .catch((error) => {
      response.status(500).json({ error })
    })
})

app.listen(app.get('port'), () => {
  console.log(`Portfolio Site API is running on http://localhost:${app.get('port')}.`);
});