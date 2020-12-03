const $ = require('jquery');
const { Thermostat } = require('../src/thermostat.js');

$(document).ready(function() {
  let thermostat = new Thermostat();

  updateTemperature();
  displayCurrentMode();
  displayCurrentEnergyUsage();
  displayWeather();

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

  $(window).click(() => {
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

  function displayWeather() {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + 'london';
    const units = '&units=metric';
    const token = '';

    $.get(url + units + token, (data) => {
      let temperature = Math.round(data.main.temp);
      $('#weather').text(`London Weather: ${temperature}°C`);
    });
  }
});