const $ = require('jquery');
const { Thermostat } = require('../src/thermostat.js');

$(document).ready(function() {
  let thermostat = new Thermostat();

  updateTemperature();
  displayCurrentMode();
  displayCurrentEnergyUsage()

  $('#increase-temp-btn').click(() => {
    thermostat.up();
    updateTemperature();
    displayCurrentMode();
    displayCurrentEnergyUsage();
  });

  $('#decrease-temp-btn').click(() => {
    thermostat.down();
    updateTemperature();
    displayCurrentMode();
    displayCurrentEnergyUsage();
  });

  $('#reset-temp-btn').click(() => {
    thermostat.reset();
    updateTemperature();
    displayCurrentMode();
    displayCurrentEnergyUsage();
  });

  $('#toggle-power-saving-btn').click(() => {
    thermostat.togglePowerSaving();
    updateTemperature();
    displayCurrentMode();
    displayCurrentEnergyUsage();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemperature());
  }

  function displayCurrentMode() {
    $('#current-mode').html(`Mode: ${thermostat.getCurrentMode()}`);
  }

  function displayCurrentEnergyUsage() {
    $('#current-usage').html(`Energy Usage: ${thermostat.getCurrentEnergyUsage()}`);
  }
});