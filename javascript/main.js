var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');

var chronometer = new Chronometer({
  minDec: document.getElementById('minDec'),
  minUni: document.getElementById('minUni'),
  secDec: document.getElementById('secDec'),
  secUni: document.getElementById('secUni'),
  hunDec: document.getElementById('hunDec'),
  hunUni: document.getElementById('hunUni'),
  splitList: document.getElementById('splits')
});

// Start/Stop Button
btnLeft.onclick = function() {
  if(this.classList.contains('start')) {

    this.classList.remove('start'); 
    this.classList.add('stop');
    this.innerText = "STOP"; 
    btnRight.classList.remove('reset');
    btnRight.classList.add('split');
    btnRight.innerText ='SPLIT';
    chronometer.startClick();

  } else {
    this.classList.remove('stop'); 
    this.classList.add('start'); 
    this.innerText = "START"; 
    btnRight.classList.remove('split');
    btnRight.classList.add('reset');
    btnRight.innerText ='RESET';
    chronometer.stopClick();
    
  }
};

// Reset/Split Button
btnRight.onclick = function() {
    if(this.classList.contains('reset')){
      chronometer.resetClick();
    }else{
      chronometer.splitClick();
    }

  
};
