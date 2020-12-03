const express = require('express');
const app = express();
const request = require('request');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
})

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// const url = 'http://api.openweathermap.org/data/2.5/weather?q=london';
// const units = '&units=metric';
// const token = `&appid=${process.env.OPEN_WEATHER_MAP_KEY}`;

// request(url + units + token, (err, res, body) => {
//   if (err) {
//     console.log(err);
//   } else {
//     let data = JSON.parse(body);
//     console.log(Math.round(data.main.temp));
//   }
// });