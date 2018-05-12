function Chronometer(opts) {
  this.minDec = opts.minDec;
  this.minUni = opts.minUni;
  this.secDec = opts.secDec;
  this.secUni = opts.secUni;
  this.hunDec = opts.hunDec;
  this.hunUni = opts.hunUni;
  this.currentTime = 0; 
  this.intervalId = null; 

  this.splitList = opts.splitList;
}

Chronometer.prototype.CLICK_STEP = 10;

Chronometer.prototype.startClick = function () {
  this.intervalId = setInterval(function() { 
    this.currentTime++
    this.drawTime();
  }.bind(this), this.CLICK_STEP)
};

Chronometer.prototype.getMinutes = function () {
  return Math.floor(this.currentTime / 100 / 60);
};

Chronometer.prototype.getSeconds = function () {
  return Math.floor((this.currentTime / 100) % 60);
};

Chronometer.prototype.getHundredthSeconds = function () {
  return this.currentTime % 100  
};

Chronometer.prototype.twoDigitsNumber = function (num) {
  if(num <10) {
    return "0" + num; 

  } else {
    return num.toString(); 
  }
}; 

Chronometer.prototype.drawTime = function () {
  this.drawMinutes();
  this.drawSeconds();
  this.drawHundredthSeconds();
};

Chronometer.prototype.drawMinutes = function () {
  this.minDec.innerText = this.twoDigitsNumber(this.getMinutes())[0];
  this.minUni.innerText = this.twoDigitsNumber(this.getMinutes())[1];
};

Chronometer.prototype.drawSeconds = function () {
  this.secDec.innerText = this.twoDigitsNumber(this.getSeconds())[0];
  this.secUni.innerText = this.twoDigitsNumber(this.getSeconds())[1];

};

Chronometer.prototype.drawHundredthSeconds = function () {
  this.hunDec.innerText = this.twoDigitsNumber(this.getHundredthSeconds())[0];
  this.hunUni.innerText = this.twoDigitsNumber(this.getHundredthSeconds())[1];
};

Chronometer.prototype.stopClick = function () {
  clearInterval(this.intervalId); 
};

Chronometer.prototype.resetClick = function () {
  this.currentTime = 0; 
  this.drawTime(); 
  this.splitList.innerHTML = "";
};

Chronometer.prototype.splitClick = function () {
  
  var newSplit = document.createElement ("li");
  newSplit.innerText =
    this.twoDigitsNumber(this.getMinutes()) + ":" + 
    this.twoDigitsNumber(this.getSeconds()) + ":" + 
    this.twoDigitsNumber(this.getHundredthSeconds());
  this.splitList.appendChild(newSplit);
};
