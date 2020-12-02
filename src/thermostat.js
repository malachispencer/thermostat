function Thermostat() {
  this.temperature = 20;
  this.minTemperature = 10;
  this.powerSaving = true;
  this.maxTemperature = 25;
}

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

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.togglePowerSaving = function() {
  this.powerSaving = !this.powerSaving;
  this.adjustMaxTemperature();
  return `Max temperature is now ${this.maxTemperature} degrees.`;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.getCurrentMode = function() {
  return this.powerSaving ? 'Power Saving' : 'Normal';
};

Thermostat.prototype.getCurrentEnergyUsage = function() {
  if (this.temperature < 18) {
    return 'Low Usage';
  } else if (this.temperature >= 18 && this.temperature <= 25) {
    return 'Medium Usage';
  } else {
    return 'High Usage';
  }
};

Thermostat.prototype.maximumReached = function() {
  return this.temperature === this.maxTemperature;
};

Thermostat.prototype.minimumReached = function() {
  return this.temperature === this.minTemperature;
};

Thermostat.prototype.adjustMaxTemperature = function() {
  this.maxTemperature = this.powerSaving ? 25 : 32;
};

module.exports = { Thermostat };