let percentage = document.querySelector(".battery");
let percent = document.getElementById("percentage");

navigator.getBattery().then((battery) => {
    // let realNumber = battery.level * 100
    percentage.style.height = battery.level * 100 + "%";
    percent.innerHTML = battery.level * 100 + "%";
})

