const futureDate = new Date(2025, 3, 30, 2, 0, 0);
const futureTime = futureDate.getTime(); // Bu satırı ekledik

const items = document.querySelectorAll(".deadline-format h4");
const deadline = document.querySelector(".deadline");

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const oneSecond = 1000;

    let days = Math.floor(t / oneDay);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / oneSecond);

    const values = [days, hours, minutes, seconds];

    function format(item) {
        return item < 10 ? `0${item}` : item;
    }

    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    });

    if (t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">I'm sorry, it's not your birthday yet.</h4>`;
    }
}

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
