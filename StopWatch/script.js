let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;
let running = false;

const display = document.getElementById("display");
const lapsList = document.getElementById("laps");

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", recordLap);

function startTimer() {
    if (!running) {
        running = true;
        interval = setInterval(updateTime, 1000);
    }
}

function pauseTimer() {
    clearInterval(interval);
    running = false;
}

function resetTimer() {
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    running = false;
    display.textContent = "00:00:00";
    lapsList.innerHTML = "";
}

function recordLap() {
    if (running) {
        const lapTime = formatTime(hours, minutes, seconds);
        const lapItem = document.createElement("li");
        lapItem.textContent = "Lap: " + lapTime;
        lapsList.appendChild(lapItem);
    }
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    display.textContent = formatTime(hours, minutes, seconds);
}

function formatTime(h, m, s) {
    return (
        (h < 10 ? "0" + h : h) + ":" +
        (m < 10 ? "0" + m : m) + ":" +
        (s < 10 ? "0" + s : s)
    );
}
