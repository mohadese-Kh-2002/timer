const $ = document;
const second = $.querySelector("#second");
const minute = $.querySelector("#minute");
const hour = $.querySelector("#hour");
const day = $.querySelector("#day");
const btnClock = $.querySelector(".wrapper-icon");
const timerInfo = $.querySelector(".timer__info");

// let timer = {
//     day: 5,
//     hour: 0,
//     minute: 0,
//     second: 0,
// };
// let b=timer
// let clear = setInterval(() => {
//     if (
//         timer.day == 0 &&
//         timer.hour == 0 &&
//         timer.minute == 0 &&
//         timer.second == 0
//     ) {
//         clearInterval(clear);
//     }
//     if (timer.second == 0) {
//         timer.second = 59;
//         if (timer.minute !== 0) {
//             timer.minute -= 1;
//         }
//     }
//     if (timer.minute == 0) {
//         timer.minute = 59;
//         if (timer.hour !== 0) {
//             timer.hour -= 1;
//         }
//     }
//     if (timer.hour == 0) {
//         timer.hour = 23;
//         timer.day -= 1;
//     }

//     timer.second--;

//     minute.textContent = timer.minute <= 9 ? `0${timer.minute}` : timer.minute;
//     second.textContent = timer.second <= 9 ? `0${timer.second}` : timer.second;
//     hour.textContent = timer.hour <= 9 ? `0${timer.hour}` : timer.hour;
//     day.textContent = timer.day;
//     saveTimer();
// }, 1000);

// window.addEventListener("load", (e) => {
//     let data = JSON.parse(localStorage.getItem("timer"));
//     if(data !== null){
//         timer=data
//     }else{
//         timer=b
//     }
// });
// function saveTimer() {
//     localStorage.setItem("timer", JSON.stringify(timer));
// }

btnClock.addEventListener("click", (e) => {
    timerInfo.classList.toggle("show-timer");
});

let clear = setInterval(() => {
    
    let now = new Date();
    let secondDate = new Date(2024, 7, 2);
    let difference = +secondDate - +now;
    let timer = {
        day: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hour: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minute: Math.floor((difference / 1000 / 60) % 60),
        second: Math.floor((difference / 1000) % 60),
    };
    day.textContent = timer.day <= 9 ? `0${timer.day}` : timer.day;
    hour.textContent = timer.hour <= 9 ? `0${timer.hour}` : timer.hour;
    minute.textContent = timer.minute <= 9 ? `0${timer.minute}` : timer.minute;
    second.textContent = timer.second <= 9 ? `0${timer.second}` : timer.second;
    if (difference <= 0) {
        day.textContent = "00";
        hour.textContent = "00";
        minute.textContent = "00";
        second.textContent = "00";
        clearInterval(clear);
    }
    console.log(difference)
}, 1000);
