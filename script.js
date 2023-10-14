let minutes = window.document.getElementById("minutes");
let seconds = window.document.getElementById("seconds");
let milliseconds = window.document.getElementById("milliseconds");
let pausebtn = window.document.getElementById("pausebtn");
let resumebtn = window.document.getElementById("resumebtn");
let resetbtn = window.document.getElementById("resetbtn");
let startbtn = window.document.getElementById("startbtn");

let interval;
let min = 0;
let sec = 0;
let milli = 0;
let ispaused = false;
startbtn.addEventListener("click", startTimer)
pausebtn.addEventListener("click", pauseTime)
resumebtn.addEventListener("click", resumeTime)
resetbtn.addEventListener("click", resetTime)
function startTimer() {
    interval = setInterval(() => {
        if (!ispaused) {
            milli += 10
            if (milli === 1000) {
                sec++;
                milli = 0;
            }
            if (sec === 60) {
                min++;
                sec = 0;
            }
            minutes.textContent = formatTime(min);
            seconds.textContent = formatTime(sec);
            milliseconds.textContent = formatMilli(milli);
        }
    }, 10)
    startbtn.style.display = "none"
    pausebtn.style.display = "block"
    pausebtn.style.backgroundColor = "rgb(143, 24, 24)"
    pausebtn.style.color = "white"
}
function pauseTime() {
    ispaused = true;
    pausebtn.style.display = "none"
    resumebtn.style.display = "block"
    resumebtn.style.backgroundColor = "rgb(143, 24, 24)"
    resumebtn.style.color = "white"
}
function resumeTime() {
    ispaused = false;
    pausebtn.style.display = "block"
    resumebtn.style.display = "none"
}
function resetTime() {
    clearInterval(interval)
    let min = 0;
    let sec = 0;
    let milli = 0;
    minutes.textContent = "00"
    seconds.textContent = "00"
    milliseconds.textContent = "000"
    pausebtn.style.display = 'none'
    startbtn.style.display = 'block'
    resetbtn.style.display = 'block'
    resumebtn.style.display = 'none'
}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
function formatMilli(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}
