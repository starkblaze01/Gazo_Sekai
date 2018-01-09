var Timer;
var TotalSeconds;

function CreateTimer(timerID, time){
    Timer = document.getElementById(timerID);  
    TotalSeconds = time;
    UpdateTimer();
    window.setTimeout("TimerCounter()",1000);
}

function TimerCounter(){
	if(TotalSeconds<=0){
		window.location.href = 'Puzzle.html';
        return;
	}
	TotalSeconds -= 1;
	UpdateTimer();
    window.setTimeout("TimerCounter()",1000);
}

function UpdateTimer(){
	Timer.innerHTML = TotalSeconds;
}
