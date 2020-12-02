function Thermostat() {
  this.temperature = 20;
  this.minimumTemperature = 10;
  this.powerSaving = true;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  this.temperature++;
};

Thermostat.prototype.down = function() {
  if (this.minimumReached()) {
    throw 'Cannot subceed minimum temperature.';
  }

  this.temperature--;
};

Thermostat.prototype.togglePowerSaving = function() {
  this.powerSaving = !this.powerSaving;
};

Thermostat.prototype.getCurrentMode = function() {
  return this.powerSaving ? 'Power Saving' : 'Normal';
};

Thermostat.prototype.minimumReached = function() {
  return this.temperature === this.minimumTemperature;
};

module.exports = { Thermostat };