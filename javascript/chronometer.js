function Chronometer(opts) {
  this.minDec = opts.minDec;
  this.minUni = opts.minUni;
  this.secDec = opts.secDec;
  this.secUni = opts.secUni;
  this.hunDec = opts.hunDec;
  this.hunUni = opts.hunUni;

  this.splitList = opts.splitList;
}

Chronometer.prototype.CLICK_STEP = 10;

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(function() {
    // TODO
  }.bind(this), this.CLICK_STEP);
};

Chronometer.prototype.getMinutes = function () {
  // TODO
};

Chronometer.prototype.getSeconds = function () {
  // TODO
};

Chronometer.prototype.getHundredthSeconds = function () {
  // TODO
};

Chronometer.prototype.twoDigitsNumber = function (num) {
  // TODO
};

Chronometer.prototype.drawTime = function () {
  // TODO
};

Chronometer.prototype.drawMinutes = function () {
  // TODO
};

Chronometer.prototype.drawSeconds = function () {
  // TODO
};

Chronometer.prototype.drawHundredthSeconds = function () {
  // TODO
};

Chronometer.prototype.stopClick = function () {
  // TODO
};

Chronometer.prototype.resetClick = function () {
  // TODO
};

Chronometer.prototype.splitClick = function () {
  // TODO
};
