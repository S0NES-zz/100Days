const text = document.getElementById("text-to-life");
text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>")

const letters = document.querySelectorAll('span');
letters.forEach(letter =>{
    letter.addEventListener("mouseenter",() =>{
        letter.classList.add("active")
    })
})