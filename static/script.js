let timer; 
let timeLeft = 25 * 60;
let mode = "work"; //remember work session or break
let paused = false;//remember if paused or running timer


//gets screen and shows it, changes screens
function showScreen(screenName) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(function(screen) {
        screen.classList.remove("active"); //removing active makes the screen disappear
    });

    document.getElementById(screenName).classList.add("active");
}


function startPomodoro() {

    //tells python backend pomodoro has started
    fetch("/start", { //send to flask's start route
        method: "POST"
    });

    clearInterval(timer); //stop any running old timer
    mode = "work";
    timeLeft = 25 * 60; //start default time of 25 mins
    paused = false;
    showScreen("work");
    startTimer();
}


//start countdown
function startTimer() {
    clearInterval(timer);
    //setInterval tells you to run code repeatedly (e.g 1s)
    timer = setInterval(function() { 
        if (!paused) {
            timeLeft--;
            updateTimer();

            if (timeLeft <= 0) {
                clearInterval(timer);
                nextStage();
            }
        }

    }, 1000); //1000 ms = 1s, timer runs every second
}


function updateTimer() {

    let minutes = Math.floor(timeLeft / 60); //whole number of mins
    let seconds = timeLeft % 60; //remaining seconds

    //padStart makes sure we have two digits
    let timeText =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");


    if (mode === "work") {
        document.getElementById("timer").textContent =
            timeText;
    } else {
        document.getElementById("breakTimer").textContent =
            timeText;
    }
}


//next stage when timer reaches 00:00
function nextStage() {

    if (mode === "work") {

        mode = "break";
        timeLeft = 5 * 60;
        showScreen("break");
        updateTimer();
        startTimer();

    } else { 
        //if we were already on work, switch back to break

        mode = "work";
        timeLeft = 25 * 60;
        showScreen("work");
        updateTimer();
        startTimer();
    }
}


function pauseTimer() {

    //tells python backend pause was clicked
    fetch("/pause", {
        method: "POST"
    });

    paused = !paused;

    //if timer is paused, show 'resume' text and vice versa
    if (paused) {
        document.getElementById("pauseButton").textContent =
            "Resume";
    } else {
        document.getElementById("pauseButton").textContent =
            "Pause";
    }
}


function resetTimer() {

    //tells python backend reset was clicked
    fetch("/reset", {
        method: "POST"
    });


    clearInterval(timer); //clear countdown timer
    mode = "work";
    timeLeft = 25 * 60;
    paused = false; //make sur ebutton isn't paused
    document.getElementById("pauseButton").textContent =
        "Pause"; // set text back to pause

    showScreen("work");
    updateTimer(); //default 25 mins
}