function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.MIN_TEMPERATURE = 10;
  this.POWER_SAVING_MAX_TEMPERATURE = 25;
  this.NORMAL_MAX_TEMPERATURE = 32;
  this.MEDIUM_USAGE_LOWER_BOUND = 18;
  this.MEDIUM_USAGE_UPPER_BOUND = 25;

  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSaving = true;
  this.maxTemperature = this.POWER_SAVING_MAX_TEMPERATURE;
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
  this.temperature = this.DEFAULT_TEMPERATURE;
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
  if (this.temperature < this.MEDIUM_USAGE_LOWER_BOUND) {
    return 'Low Usage';
  } else if (this.temperature >= this.MEDIUM_USAGE_LOWER_BOUND && this.temperature <= this.MEDIUM_USAGE_UPPER_BOUND) {
    return 'Medium Usage';
  } else {
    return 'High Usage';
  }
};

Thermostat.prototype.maximumReached = function() {
  return this.temperature === this.maxTemperature;
};

Thermostat.prototype.minimumReached = function() {
  return this.temperature === this.MIN_TEMPERATURE;
};

Thermostat.prototype.adjustMaxTemperature = function() {
  this.maxTemperature = this.powerSaving ? this.POWER_SAVING_MAX_TEMPERATURE : this.NORMAL_MAX_TEMPERATURE;

  if (this.temperature > this.maxTemperature) {
    this.temperature = this.maxTemperature;
  } 
};

module.exports = { Thermostat };