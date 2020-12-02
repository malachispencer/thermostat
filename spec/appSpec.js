const { Thermostat } = require('../src/app.js');

describe('Thermostat', () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  describe('#constructor', () => {
    it('sets the temperature to 20 by default', () => {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe('#up', () => {
    it('increases the temperature by 1', () => {
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });
  });

  describe('#down', () => {
    it('descreases the temperature by 1', () => {
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });
  });
});