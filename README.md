# Thermostat

Thermostat web application built in JavaScript, Node.js, Express.js, jQuery, HTML, CSS and Bootstrap.

### Setting Up Jasmine For Node.js

1. Run ```npm init``` to create ```package.json``` file.

2. Run ```npm install --save-dev jasmine``` to install Jasmine locally and save as a dev dependency.

3. Add ```"test-init": "./node_modules/jasmine/bin/jasmine.js init"``` to scripts in ```package.json```.

4. Add ```"test": "./node_modules/jasmine/bin/jasmine.js"``` to scripts in ```package.json```.

5. Run ```npm run test-init``` to initialize Jasmine.

### Running Tests

* Run ```npm test``` from the project root.

### Setting Up Browserify

1. Run ```npm i browserify --save-dev``` to save Browserify as a dev dependecy.

2. Add ```"build": "browserify ./public/script.js -o ./public/bundle.js"``` to scripts in ```package.json```.

3. Run ```npm run build``` to create the ```bundle.js``` file.

4. Add ```<script src="../bundle.js"></script>``` just above the closing body tag inside ```./public/index.html```.

### Setting Up Watchify

1. Run ```npm i watchify --save-dev``` to save Watchify as a dev dependency.

2. Add ```"watch": "watchify ./public/script.js -o ./public/bundle.js"``` to scripts in ```package.json```.

3. Run ```npm run watch``` to have ```bundle.js``` updated in real time.

### Running The Application

1. Run ```npm start``` or ```npm run dev``` from the command line to start the server.

2. Go to ```localhost:PORT``` in the browser, with PORT being your environment's PORT, or 3000 if not set.

### Handling The API Request With POST

In order to process the API request securely, we must perform it on the server side. In the application code we do this by sending a get request - using the jQuery ajax() function - to the server, passing the city name along in the url params. On the server we make the API get request inside of the get route - using Axios - then we send the response back to the client.
This is the conventional and recommended way to perform this API request, however, we can also do it with a post request, as
illustrated below.

#### Client Side

```javascript
getWeatherReport();

$('input:radio[name=weather-location]').change((e) => {
  const object = { city: e.target.value }
  getWeatherReport(object);
});

function getWeatherReport(object = { city: 'London, GB' }) {
    
  $.ajax('/weather', {
    method: 'POST',
    data: object
  })
  .done(data => {
    let temp = formatTemperature(data.temp);
    let feelsLike = formatTemperature(data.feels_like);
    let humidity = formatHumidity(data.humidity);

    $('#city').html(object.city);
    $('#weather').html(`Temperature: ${temp}`);
    $('#feels-like').html(`Feels Like: ${feelsLike}`);
    $('#humidity').html(`Humidity: ${humidity}`);
  })

}
```

#### Server Side

```javascript
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
```
