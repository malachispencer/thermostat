const $ = require('jquery');
const { Thermostat } = require('../src/thermostat.js');

$(document).ready(function() {
  let thermostat = new Thermostat();

  updateTemperature();
  displayCurrentMode();
  displayCurrentEnergyUsage();
  getWeatherReport();

  $('input:radio[name=weather-location]').change((e) => {
    getWeatherReport(e.target.value);
  });

  $('#increase-temp-btn').click(() => {
    thermostat.up();
  });

  $('#decrease-temp-btn').click(() => {
    thermostat.down();
  });

  $('#reset-temp-btn').click(() => {
    thermostat.reset();
  });

  $('#toggle-power-saving-btn').click(() => {
    thermostat.togglePowerSaving();
  });

  $('button').click(() => {
    updateTemperature();
    displayCurrentMode();
    displayCurrentEnergyUsage();
  });

  function updateTemperature() {
    $('#temperature').text(`${thermostat.getCurrentTemperature()}°C`);
  }

  function displayCurrentMode() {
    $('#current-mode').html(`Mode: ${thermostat.getCurrentMode()}`);
  }

  function displayCurrentEnergyUsage() {
    $('#current-usage').html(`Energy Usage: ${thermostat.getCurrentEnergyUsage()}`);
  }

  function formatTemperature(temperature) {
    return `${Math.round(temperature)}°C`;
  }

  function formatHumidity(humidity) {
    return `${humidity}%`;
  }

  function getWeatherReport(city = 'London, GB') {
    $.ajax(`/weather/${city}`, {
      method: 'get'
    })
    .done(data => {
      let temp = formatTemperature(data.temp);
      let feelsLike = formatTemperature(data.feels_like);
      let humidity = formatHumidity(data.humidity);

      $('#city').html(city);
      $('#weather').html(`Temperature: ${temp}`);
      $('#feels-like').html(`Feels Like: ${feelsLike}`);
      $('#humidity').html(`Humidity: ${humidity}`);
    })
  }
});