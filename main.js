var start = document.getElementById('start');
var reset = document.getElementById('reset');
var stop = document.getElementById('stop');

var wm = document.getElementById('w-minutes');
var ws = document.getElementById('w-seconds');
var bm = document.getElementById('b-minutes');
var bs = document.getElementById('b-minutes');

//store a reference to a timer variable
var startTimer;
start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running")
    }
})

reset.addEventListener('click', function(){
    wm.innerText = 25;
    ws.innerText = "00";
    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
})

stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})

//start timer function
function timer(){
    //work timer countdown
    if(ws.innerText != 0){
        ws.innerText --;
    } else if(wm.innerText !=0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText --;
    }
////break timer countdown
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText --;
        } else if(bm.innerText !=0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText --;
        }
    }

    //increment counter by one if one full cycle is complited
    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        wm.innerText = 25;
        ws.innerText = "00";
        bm.innerText = 5;
        bs.innerText = "00";

        document.getElementById('counter').innerText++;
    }
}
//stop timer function

function stopInterval(){
    clearInterval(startTimer);
}