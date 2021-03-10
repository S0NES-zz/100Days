let min, max, result, btn, txt;

btn = document.getElementById("btnGerar");
txt = document.getElementById("titulo");

btn.addEventListener("click", (e)=>{
    min = document.getElementById("inputMin");
    max = document.getElementById("inputMax");
    e.preventDefault();
    min = Math.ceil(min.value);
    max = Math.floor(max.value);
    result = Math.floor(((Math.random() * (max - min)) + min) + 1);
    txt.innerHTML = ("O Número gerado é "+ result);
});

