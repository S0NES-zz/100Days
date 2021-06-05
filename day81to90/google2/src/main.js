let input = document.querySelector("input");
let btn = document.querySelector('button')
btn.addEventListener("click", () => {
  let value = input.value.replace(/\s/g, "+");
    window.open(`https://www.google.com/search?q=${value}`, '_blank');
});

