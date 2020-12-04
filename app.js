const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios').default;

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/public/index.html');
});

app.post('/weather', (request, response) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${request.body.city}`;
  const units = '&units=metric';
  const token = `&appid=${process.env.OPEN_WEATHER_MAP_KEY}`;

  axios({
    method: 'get',
    url: url + units + token
  })
    .then(res => {
      response.send(res.data.main);
    })
    .catch(err => {
      console.log(err);
    });
});