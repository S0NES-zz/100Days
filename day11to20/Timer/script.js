let year = document.getElementById("year");
let nextYear = new Date().getFullYear() + 1;
year.value = nextYear;

let countDate = new Date("Jan 1," + year.value + " 00:00:00").getTime();
year.addEventListener("change", () => {
  if (year.value < nextYear) return year.value = nextYear;
  if (year.value.length > 4) return year.value = nextYear;
  year.value;
  countDate = new Date("Jan 1," + year.value + " 00:00:00").getTime();
});

function time() {
  var now = new Date().getTime();
  gap = countDate - now;

  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;

  var d = Math.floor(gap / day);
  var h = Math.floor((gap % day) / hour);
  var m = Math.floor((gap % hour) / minute);
  var s = Math.floor((gap % minute) / second);

  document.getElementById("day").innerText = d;
  document.getElementById("hour").innerText = h;
  document.getElementById("minute").innerText = m;
  document.getElementById("second").innerText = s;
}

setInterval(() => {
  time();
}, 1000);
