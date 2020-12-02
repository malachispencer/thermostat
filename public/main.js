const $ = require('jquery');
const { Thermostat } = require('../src/thermostat.js');

$(document).ready(function() {
  let thermostat = new Thermostat();

  updateTemperature();

  $('#increase-temp-btn').click(() => {
    thermostat.up();
    updateTemperature();
  });

  $('#decrease-temp-btn').click(() => {
    thermostat.down();
    updateTemperature();
  });

  $('#reset-temp-btn').click(() => {
    thermostat.reset();
    updateTemperature();
    });

  $('#toggle-power-saving-btn').click(() => {
    thermostat.togglePowerSaving();
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemperature());
  }
});