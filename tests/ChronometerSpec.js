describe('', function () {
  beforeEach(function () {
    chronometer = new Chronometer({
      minDec: document.createElement("div"),
      minUni: document.createElement("div"),
      secDec: document.createElement("div"),
      secUni: document.createElement("div"),
      hunDec: document.createElement("div"),
      hunUni: document.createElement("div"),
      splitList: document.createElement("div")
    });
  });

  describe('constructor function', function () {
    it('Should declare a Chronometer function', function () {
      expect(typeof Chronometer).toEqual('function');
    });

    it('Should declare a `currentTime` property', function () {
      expect(chronometer.currentTime).toBeDefined();
    });

    it('`currentTime` should be equal to 0 at the beginning', function () {
      expect(chronometer.currentTime).toEqual(0);
    });

    it('Should declare a `intervalId` property', function () {
      expect(chronometer.intervalId).toBeDefined();
    });
  });

  describe('startClick function', function () {
    beforeEach(function () {
      jasmine.clock().install();
      chronometer.startClick();
    });

    afterEach(function () {
      jasmine.clock().uninstall();
    });

    it('Declare a startClick method', function () {
      expect(typeof chronometer.startClick).toEqual('function');
    });

    it('Set to intervalId a new setInterval', function () {
      expect(typeof chronometer.intervalId).toEqual('number');
    });

    it('should increment 1 to currentTime property on every 10 milliseconds of seconds interval', function () {
      jasmine.clock().tick(10);

      expect(chronometer.currentTime).toEqual(1);
    });

    it('after 3 seconds, currentTime should be 300', function () {
      jasmine.clock().tick(3000);

      expect(chronometer.currentTime).toEqual(300);
    });
  });

  describe('getMinutes function', function () {
    it('Should be declare', function () {
      expect(typeof chronometer.getMinutes).toEqual('function');
    });

    it('Should return a number', function () {
      chronometer.currentTime = 234;
      expect(typeof chronometer.getMinutes()).toEqual('number');
    });

    it('Should return a number without decimals', function () {
      chronometer.currentTime = 234;

      expect(chronometer.getMinutes() % 1).toEqual(0);
    });

    it('Should return the currentTime in minutes', function () {
      chronometer.currentTime = 6000;

      expect(chronometer.getMinutes()).toEqual(1);
    });

    it('Should return 0 when the currentTime haven\'t start', function () {
      chronometer.currentTime = 0;

      expect(chronometer.getMinutes()).toEqual(0);
    });

    it('Should return the currentTime in minutes even for laaaarge numbers', function () {
      chronometer.currentTime = 50210;

      expect(chronometer.getMinutes()).toEqual(8);
    });
  });

  describe('getSeconds function', function () {
    it('Should be declare', function () {
      expect(typeof chronometer.getSeconds).toEqual('function');
    });

    it('Should return a number', function () {
      chronometer.currentTime = 3;

      expect(typeof chronometer.getSeconds()).toEqual('number');
    });

    it('Should return 0 when the currentTime haven\'t start', function () {
      chronometer.currentTime = 0;

      expect(chronometer.getSeconds()).toEqual(0);
    });

    it('Should return the seconds of the currentTime', function () {
      chronometer.currentTime = 300;

      expect(chronometer.getSeconds()).toEqual(3);
    });

    it('Should return the seconds that remain after removing the minutes to the currentTime', function () {
      chronometer.currentTime = 6500;

      expect(chronometer.getSeconds()).toEqual(5);
    });
  });

  describe('getHundredthSeconds function', function () {
    it('Should be declare', function () {
      expect(typeof chronometer.getHundredthSeconds).toEqual('function');
    });

    it('Should return a number', function () {
      chronometer.currentTime = 3;

      expect(typeof chronometer.getHundredthSeconds()).toEqual('number');
    });

    it('Should return 0 when the currentTime haven\'t start', function () {
      chronometer.currentTime = 0;

      expect(chronometer.getHundredthSeconds()).toEqual(0);
    });

    it('Should return the currentTime', function () {
      chronometer.currentTime = 300;

      expect(chronometer.getHundredthSeconds()).toEqual(0);
    });

    it('Should return the seconds that remain after removing the seconds to the currentTime', function () {
      chronometer.currentTime = 123;

      expect(chronometer.getHundredthSeconds()).toEqual(23);
    });
  });

  describe('twoDigitsNumber function', function () {
    it('Should be declare', function () {
      expect(typeof chronometer.twoDigitsNumber).toEqual('function');
    });

    it('Should return a string', function () {
      expect(typeof chronometer.twoDigitsNumber(7)).toEqual('string');
    });

    it('Should return \'00\' when the value is 0', function () {
      expect(chronometer.twoDigitsNumber(0)).toEqual('00');
    });

    it('Should return \'15\' when the value is 15', function () {
      expect(chronometer.twoDigitsNumber(15)).toEqual('15');
    });

    it('Should return a string of length 2', function () {
      expect(chronometer.twoDigitsNumber(7).length).toEqual(2);
    });

    it('Should return \'03\' when the value is 3', function () {
      expect(chronometer.twoDigitsNumber(3)).toEqual('03');
    });
  });

  describe('drawTime function', function () {
    it('Should be declare', function () {
      expect(typeof chronometer.drawTime).toEqual('function');
    });

    it('Should be called on each interval of our startClick setInterval', function () {
      jasmine.clock().install();
      chronometer.startClick();
      spyOn(chronometer, 'drawTime');
      jasmine.clock().tick(1000);

      expect(chronometer.drawTime).toHaveBeenCalled();
      jasmine.clock().uninstall();
    });

    it('Should draw time', function () {
      chronometer.currentTime = 67318;
      chronometer.drawTime();

      expect(chronometer.minDec.innerText).toEqual('1');
      expect(chronometer.minUni.innerText).toEqual('1');
      expect(chronometer.secDec.innerText).toEqual('1');
      expect(chronometer.secUni.innerText).toEqual('3');
      expect(chronometer.hunDec.innerText).toEqual('1');
      expect(chronometer.hunUni.innerText).toEqual('8');
    });

    it('Should call other draw functions', function () {
      spyOn(chronometer, 'drawMinutes');
      spyOn(chronometer, 'drawSeconds');
      spyOn(chronometer, 'drawHundredthSeconds');

      chronometer.drawTime();

      expect(chronometer.drawMinutes).toHaveBeenCalled();
      expect(chronometer.drawSeconds).toHaveBeenCalled();
      expect(chronometer.drawHundredthSeconds).toHaveBeenCalled();
    });
  });

  describe('drawMinutes function', function () {
    it('Should be declare', function () {
      expect(typeof chronometer.drawMinutes).toEqual('function');
    });
  });

  describe('drawSeconds function', function () {
    it('Should be declare', function () {
      expect(typeof chronometer.drawSeconds).toEqual('function');
    });
  });

  describe('drawHundredthSeconds function', function () {
    it('Should be declare', function () {
      expect(typeof chronometer.drawHundredthSeconds).toEqual('function');
    });
  });

  describe('stopClick function', function () {
    it('Should be declare', function () {
      expect(typeof chronometer.stopClick).toEqual('function');
    });

    it('Should clear the intervalId', function () {
      spyOn(window, 'clearInterval');
      chronometer.stopClick();

      expect(clearInterval).toHaveBeenCalled();
    });
  });

  describe('resetClick function', function () {
    it('Should be declare', function () {
      expect(typeof chronometer.resetClick).toEqual('function');
    });

    it('Should clear the currentTime property', function () {
      chronometer.resetClick();

      expect(chronometer.currentTime).toEqual(0);
    });
  });

  describe('splitClick function', function () {
    it('Should be declare', function () {
      expect(typeof chronometer.splitClick).toEqual('function');
    });

    it('Should add split to splitList', function () {
      chronometer.currentTime = 67318;
      chronometer.splitClick();

      expect(chronometer.splitList.innerHTML).toEqual("<li>11:13:18</li>");
    });
  });
});
