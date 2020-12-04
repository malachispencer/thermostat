const $ = require('jquery');
const { Thermostat } = require('../src/thermostat.js');

$(document).ready(function() {
  let thermostat = new Thermostat();

  updateTemperature();
  displayCurrentMode();
  displayCurrentEnergyUsage();

  $('input:radio[name=weather-location]').change((e) => {
    const object = { city: e.target.value }

    $.ajax('/weather', {
      method: 'POST',
      data: object
    })
    .done(data => {
      console.log(data);
    })
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
});