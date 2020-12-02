const { Thermostat } = require('../src/app.js');

describe('Thermostat', () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  describe('constructor', () => {
    it('sets the temperature to 20 by default', () => {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('up', () => {
    it('increases the temperature by 1', () => {
      thermostat.up();
      expect(thermostat.currentTemperature()).toEqual(21);
    });
  });
});