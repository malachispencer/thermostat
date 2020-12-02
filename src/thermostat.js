function Thermostat() {
  this.temperature = 20;
  this.minTemperature = 10;
  this.maxTemperature = 25;
  this.powerSaving = true;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.maximumReached()) {
    throw 'Cannot exceed maximum temperature.';
  }

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
  this.adjustMaxTemperature();
};

Thermostat.prototype.getCurrentMode = function() {
  return this.powerSaving ? 'Power Saving' : 'Normal';
};

Thermostat.prototype.maximumReached = function() {
  return this.temperature === this.maxTemperature;
};

Thermostat.prototype.minimumReached = function() {
  return this.temperature === this.minTemperature;
};

Thermostat.prototype.adjustMaxTemperature = function() {
  this.maxTemperature = this.powerSaving ? 25 : 32;
}

module.exports = { Thermostat };