const resultDom = document.querySelector(".result");
const toggleMode = document.querySelector("#mode");
const toggleList = document.querySelector("#list");
const modeIcon = document.querySelector("#modeIcon");
const listIcon = document.querySelector("#listIcon");
const root = document.body;

const LoadData = async () => {
  const url = "src/days.json";
  const res = await fetch(url);
  const data = await res.json();
  length = Object.keys(data).length;
  handleData(data, length);
};

LoadData();
function handleData(data, length) {
  for (var i = 1; i <= length; i++) {
    const itemInnerHtml = `<a href=${data[i].url} class="item">
          <img src= src/${data[i].img} alt="${data[i].title}">
          <p>day ${data[i].id} - <span>${data[i].title}</span></p>
        </a>`;
    resultDom.innerHTML += itemInnerHtml;
  }
}
toggleList.addEventListener("change", () => {
  const itemDom = document.querySelectorAll(".item");
  const imgs = document.querySelectorAll("img");
  if (toggleList.checked === true) {
    listStyle(imgs, itemDom)
  }
  if (toggleList.checked === false) {
    gridStyle(imgs, itemDom);
  }
});

toggleMode.addEventListener("change", () => {
  if (toggleMode.checked === true) {
    lightMode();
  }
  if (toggleMode.checked === false) {
    darkMode();
  }
});
function listStyle(imgs, itemDom) {
  listIcon.classList.add("fa-list");
  listIcon.classList.remove("fa-th");
  resultDom.style.flexDirection = "column";
  for (var i = 0; i < itemDom.length; i++) {
    resultDom.style.alignItems = "center";
    itemDom[i].style.flexDirection = "row";
    itemDom[i].style.backgroundColor = "var(--bg)";
    itemDom[i].style.color = "var(--txtColor)";
    itemDom[i].style.maxWidth = "500px";
    imgs[i].style.borderRadius = "20px";
  }
}
function gridStyle(imgs, itemDom) {
  listIcon.classList.remove("fa-list");
  listIcon.classList.add("fa-th");
  resultDom.style.flexDirection = "row";
  for (var j = 0; j < itemDom.length; j++) {
    resultDom.style.alignItems = "flex-start";
    itemDom[j].style.flexDirection = "column";
    itemDom[j].style.backgroundColor = "var(--txtColor)";
    itemDom[j].style.color = "var(--bg)";
    imgs[j].style.borderRadius = "20px 20px 0 0";
  }
}
function lightMode() {
  root.style.setProperty("--bg", "#F2F2F2");
  root.style.setProperty("--txtColor", "#464646");
  root.style.setProperty("--float", "rgb(0, 0, 0)");
  modeIcon.classList.remove("fa-sun");
  modeIcon.classList.add("fa-moon");
}
function darkMode() {
  root.style.setProperty("--bg", " #464646");
  root.style.setProperty("--txtColor", "#F2F2F2");
  root.style.setProperty("--float", "rgb(240, 240, 240)");
  modeIcon.classList.add("fa-sun");
  modeIcon.classList.remove("fa-moon");
}


// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});