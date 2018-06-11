const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const dates = require('./dates');

app.use(cors());
app.use(bodyParser.json());

app.get('/day/:id', (req, res) => {
  let date = dates.find((element) => {
    return element.id == req.params.id;
  });
  if (!date) {
    return res.send({error: true, message: 'The date does not exist!'});
  }
  res.send(date);
});

app.get('/days', (req, res) => {
  res.send(dates);
});

app.use((req, res, next) => {
  res.send({statusCode: 404, error: true, message: 'This route does not exist!'});
});

app.listen(3000, () => {
  console.log('Running on port 3000');
});

module.exports = app;