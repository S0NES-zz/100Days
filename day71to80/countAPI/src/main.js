
const countEl = document.getElementById("visited");

updateVisitCount();

function updateVisitCount() {
  fetch("https://api.countapi.xyz/update/counter-sones/100days/?amount=1")
    .then((res) => res.json())
    .then((res) => {
      countEl.innerHTML = res.value;
    });
}
