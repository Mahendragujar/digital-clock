const hour = document.getElementById('hour');
const minutes = document.getElementById('minutes');
const second = document.getElementById('second');
const day = document.getElementById('day');

const monthName = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const clock = setInterval(function time() {
    let today = new Date();
    let d = String(today.getDate()).padStart(2, '0'); // Add leading zero
    let m = today.getMonth();
    let y = today.getFullYear();
    let h = String(today.getHours()).padStart(2, '0'); // Add leading zero
    let min = String(today.getMinutes()).padStart(2, '0'); // Add leading zero
    let sec = String(today.getSeconds()).padStart(2, '0'); // Add leading zero

    day.innerHTML = `${d} ${monthName[m]} ${y}`; // Date format: DD Month YYYY
    hour.textContent = h;
    minutes.textContent = min;
    second.innerText = sec;
}, 1000);

