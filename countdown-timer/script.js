const daysUI    = document.getElementById("days") 
const hoursUI   = document.getElementById("hours")
const minutesUI = document.getElementById("mins")
const secondsUI = document.getElementById("seconds")


const myBirthday = "2 mar 2023"

function countdown() {
    const BirthdayDate = new Date(myBirthday)
    const currentDate = new Date()

    const totalSeconds = (BirthdayDate - currentDate) / 1000
    const days    = Math.floor(totalSeconds / 3600 / 24)
    const hours   = Math.floor(totalSeconds / 3600 / 24) % 24
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60

    daysUI.innerText = days
    hoursUI.innerText = formatTime(hours)
    minutesUI.innerText = formatTime(minutes)
    secondsUI.innerText = formatTime(seconds)

}

// function to add zero in front of the number if the number is less that 10
function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

setInterval(countdown, 1000)