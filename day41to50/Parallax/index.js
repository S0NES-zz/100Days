let text = document.getElementById("text");
let btn = document.getElementById("btn");
let bg = document.getElementById("bg");
let river = document.getElementById("sea");
let dg = document.getElementById("dragon");
let header = document.getElementById("header")

window.addEventListener("scroll", e =>{
    let value = window.scrollY;
    if(value > 750){
        header.style.background = "rgba(134, 19, 168, 0.45)";
    }
    if(value < 750){
        header.style.background = "rgba(134, 19, 168, 0)";
    }
    text.style.bottom = 50 + value * .5 + '%';
    btn.style.marginTop = value * 1.5 + 'px';
})
