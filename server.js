const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (request, response) => {
  response.send('Hello Portfolio Messages!');
});

app.listen(app.get('port'), () => {
  console.log(`Portfolio Site API is running on http://localhost:${app.get('port')}.`);
});