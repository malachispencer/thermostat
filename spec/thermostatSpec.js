const { Thermostat } = require('../src/thermostat.js');

describe('Thermostat', () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  describe('#constructor', () => {
    it('sets the temperature to 20 by default', () => {
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });

    it('has power saving on by default', () => {
      expect(thermostat.powerSaving).toEqual(true);
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

    it('throws an error if you try to go below 10 degrees', () => {
      for (let i = 1; i <= 10; i ++) {
        thermostat.down();
      }

      expect(function() { thermostat.down() }).toThrow('Cannot subceed minimum temperature.');
    });
  });

  describe('#togglePowerSaving', () => {
    it(`turns off powerSaving if it's currently on`, () => {
      thermostat.togglePowerSaving();
      expect(thermostat.getCurrentMode()).toBe('Normal');
    });

    it(`turns on powerSaving if it's currently off`, () => {
      thermostat.togglePowerSaving();
      thermostat.togglePowerSaving();
      expect(thermostat.getCurrentMode()).toBe('Power Saving');
    });

    it('calls the setMaximumTemperature function', () => {
      spyOn(thermostat, 'adjustMaxTemperature');
      thermostat.togglePowerSaving();
      expect(thermostat.adjustMaxTemperature).toHaveBeenCalled();
    });
  });
});