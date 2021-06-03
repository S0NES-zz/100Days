const scene = document.querySelector(".scene");
const container = document.querySelector(".container");
scene.addEventListener("click", ()=>{
    container.classList.toggle("flip");
})