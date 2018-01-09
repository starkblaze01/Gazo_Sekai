var counter=1;
var Timer;
var TotalSeconds;

function GetElementInsideContainer(containerID) {
  var elm = {};
  var elms = document.getElementById(containerID).getElementsByTagName("*");
  elm = elms[0];
  return elm;
}    
    
var dragSrcEl = null;
var v="1";

function handleDragStart(e){
  this.style.opacity = '1';
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e){
  if (e.preventDefault){
    e.preventDefault(); 
  }
  e.dataTransfer.dropEffect = 'move'; 
  return false;
}

function handleDragEnter(e){
  this.classList.add('over');
}

function handleDragLeave(e){
  this.classList.remove('over');
}

function handleDrop(e){
  if (e.stopPropagation){
    e.stopPropagation(); 
  }
  if (dragSrcEl != this){
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
    var e1 = GetElementInsideContainer("div1");
    var e2 = GetElementInsideContainer("div2");
    var e3 = GetElementInsideContainer("div3");
    var e4 = GetElementInsideContainer("div4");
    var e5 = GetElementInsideContainer("div5");
    var e6 = GetElementInsideContainer("div6");
    var e7 = GetElementInsideContainer("div7");
    var e8 = GetElementInsideContainer("div8");
    var e9 = GetElementInsideContainer("div9"); 
    if(e1.id==="h8" && e2.id==="h3" && e3.id==="h7" && e4.id==="h4" && e5.id==="h1" && e6.id==="h9"&& e7.id==="h2" && e8.id==="h6"&& e9.id==="h5"){
      counter=0;
      localStorage[ "wicked" ] = TotalSeconds;
      window.location.href='Score.html';
    }
  }
  return false;
}

function handleDragEnd(e){
  [].forEach.call(cols, function (col) {
    col.classList.remove('over');
  }); 
}

var cols = document.querySelectorAll('#puzzleBlock .block');
[].forEach.call(cols, function(col) {
  col.addEventListener('dragstart', handleDragStart, false);
  col.addEventListener('dragenter', handleDragEnter, false);
  col.addEventListener('dragover', handleDragOver, false);
  col.addEventListener('dragleave', handleDragLeave, false);
  col.addEventListener('drop', handleDrop, false);
  col.addEventListener('dragend', handleDragEnd, false);
});

function CreateTimer(TimerID, Time) {
Timer = document.getElementById(TimerID);
TotalSeconds = Time;
UpdateTimer();
window.setTimeout("Tick()", 1000);
}

function Tick() {
  if(counter <= 0){
      return;  
    }
TotalSeconds += 1;
UpdateTimer();
window.setTimeout("Tick()", 1000);
}

function UpdateTimer() {
  Timer.innerHTML = TotalSeconds;
}  
