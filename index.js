let countDownElement = document.querySelector("#countdown")
let startingMinutes;
let time = startingMinutes * 60;
let timer;
const startBtn = document.querySelector("#start")
const pauseBtn = document.querySelector("#pause")
const pomodoroBtn = document.querySelector("#pomodoro")
const shortBreakBtn = document.querySelector("#shortBreak")
const longBreakBtn = document.querySelector("#longBreak")
const startingMin = document.getElementById("startingMin")
let sessionType = "pomodoro";

//covert time

formatTime()


//pomodoro btn function on click
pomodoroBtn.onclick = function(){
    setIntervalStatus(false)
    time = document.getElementById("pomodoroTime").value * 60;
    if(!time){
        time = 25 * 60;
    }
    setIntervalStatus(true)
    pauseBtn.disabled = false;
    startBtn.disabled = true;
    sessionType = "pomodoro"

}    
//pause btn function on click    
shortBreakBtn.onclick = function(){
    setIntervalStatus(false)
    time = document.getElementById("shortBreakTime").value * 60;
    formatTime()
    setIntervalStatus(true)
    sessionType = "shortBreak"
}
//pause btn function on click    
longBreakBtn.onclick = function(){
    setIntervalStatus(false)
    time = document.getElementById("longBreakTime").value * 60;
    formatTime()
    setIntervalStatus(true)
    sessionType = "longBreak"
}







//start btn function
startBtn.onclick = function(){
    setIntervalStatus(true);
    this.disabled = true;
    pauseBtn.disabled = false;
    
}
//reset btn function
document.querySelector("#reset").onclick = function(){
    setIntervalStatus(false)
    if (sessionType === "pomodoro"){
    time = document.getElementById("pomodoroTime").value * 60;
    }
    if (sessionType === "shortBreak"){
        time = document.getElementById("shortBreakTime").value * 60;
    }
    if (sessionType === "longBreak"){
        time = document.getElementById("longBreakTime").value * 60;
    }
    setIntervalStatus(true)
    pauseBtn.disabled = false;
    startBtn.disabled = true;
}
//pause btn function
pauseBtn.onclick = function(){
    setIntervalStatus(false)
    this.disabled = true;
    startBtn.disabled = false;
}



function formatTime(){
    if(!time){
        time = 25 * 60;
    }
    let minutes = Math.floor(time/60);
    let seconds = time%60;
    seconds = seconds < 10 ? '0'+ seconds : seconds;
    countDownElement.innerHTML = `${minutes}:${seconds}`
}



function setIntervalStatus(status){
    
    if(status){
    timer = setInterval(countdown, 1000);
    }
    else{
        clearInterval(timer)
    }
}



function countdown(){
    if(time>0){
        time--;
        formatTime()
    } else {
        setIntervalStatus(false);
        alert("alarm");
        time = startingMinutes * 60;
        formatTime()
        startBtn.disabled = false;
    }
}