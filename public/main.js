const $ = require('jquery');
const { Thermostat } = require('../src/thermostat');

$(document).ready(function() {
  let thermostat = new Thermostat();

  $('#temperature').text(thermostat.getCurrentTemperature());
});