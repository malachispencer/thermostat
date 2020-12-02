const $ = require('jquery');
const { Thermostat } = require('../src/thermostat.js');

$(document).ready(function() {
  let thermostat = new Thermostat();

  $('#temperature').text(thermostat.getCurrentTemperature());

  $('#increase-temp-btn').click(() => {
    thermostat.up();
    $('#temperature').text(thermostat.getCurrentTemperature());
  });

  $('#decrease-temp-btn').click(() => {
    thermostat.down();
    $('#temperature').text(thermostat.getCurrentTemperature());
  });

  $('#reset-temp-btn').click(() => {
    thermostat.reset();
    $('#temperature').text(thermostat.getCurrentTemperature());
  });

  $('#toggle-power-saving-btn').click(() => {
    thermostat.togglePowerSaving();
    $('#temperature').text(thermostat.getCurrentTemperature());
  });
});