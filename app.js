const hour = document.querySelector('#hour');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');
const ampm = document.querySelector('#ampm');

function upclock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let a = "AM";
    if (h > 12) {
        h = h - 12;
        a = "PM"
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hour.innerText = h;
    min.innerText = m;
    sec.innerText = s;
    ampm.innerText = a;
    setTimeout(() => { upclock() }, 1000)
}
upclock();