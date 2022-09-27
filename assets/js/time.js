let hours = document.querySelectorAll('.minutes')
let minutes = document.querySelectorAll('.seconds')

setInterval(() => {
    setHour()
}, 60000);

const timeToString = () => {
    var today = new Date();
    let hoursInString = today.getHours().toString()
    let minutesInString = today.getMinutes().toString()
    return [hoursInString, minutesInString, today]
}

const setHour = () => {
    const [h, m, today] = timeToString()
    hours[0].innerText = h.charAt(0)
    hours[1].innerText = h.charAt(1)
    if (m.length > 1) {
        minutes[0].innerText = m.charAt(0)
        minutes[1].innerText = m.charAt(1)
    } else {
        minutes[1].innerText = m.charAt(0)
    }
}

setHour()