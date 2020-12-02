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

    it('throws an exception if you try to go above maxTemperature', () => {
      for (let i = 1; i <= 5; i++) {
        thermostat.up();
      }
      
      expect(function() { thermostat.up() }).toThrow('Cannot exceed maximum temperature.');
    });
  });

  describe('#down', () => {
    it('descreases the temperature by 1', () => {
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });

    it('throws an exception if you try to go below 10 degrees', () => {
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

    it('calls the adjustMaxTemperature function', () => {
      spyOn(thermostat, 'adjustMaxTemperature');
      thermostat.togglePowerSaving();
      expect(thermostat.adjustMaxTemperature).toHaveBeenCalled();
    });

    it('returns a confirmation of the new maxTemperature', () => {
      expect(thermostat.togglePowerSaving()).toEqual('Max temperature is now 32 degrees.');
    });
  });

  describe('#adjustMaxTemperature', () => {
    it('sets maxTemperature to 25 if powerSaving is true', () => {
      thermostat.togglePowerSaving();
      thermostat.togglePowerSaving();
      expect(thermostat.maxTemperature).toEqual(25);
    });

    it('sets maxTemperature to 32 if powerSaving is false', () => {
      thermostat.togglePowerSaving();
      expect(thermostat.maxTemperature).toEqual(32);
    });

    it(`sets temperature to 25 if it was above that before toggle`, () => {
      thermostat.togglePowerSaving();

      for (let i = 1; i <= 12; i++) {
        thermostat.up();
      }

      thermostat.togglePowerSaving();
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe('#reset', () => {
    it('resets the temperature to 20', () => {
      thermostat.down();
      thermostat.down();
      thermostat.reset();
      expect(thermostat.getCurrentTemperature()).toEqual(20);
    });
  });

  describe('#getCurrentEnergyUsage', () => {
    it(`returns 'low usage' if temperature is less than 18`, () => {
      for (let i = 1; i <= 3; i++) {
        thermostat.down();
      }

      expect(thermostat.getCurrentEnergyUsage()).toEqual('Low Usage');
    });

    it(`returns 'medium usage' if temperature is between 18 and 25`, () => {
      expect(thermostat.getCurrentEnergyUsage()).toEqual('Medium Usage');
    });

    it(`returns 'high usage' if temperature is above 25`, () => {
      thermostat.togglePowerSaving();

      for (let i = 1; i <= 6; i++) {
        thermostat.up();
      }

      expect(thermostat.getCurrentEnergyUsage()).toEqual('High Usage');
    });
  });
});