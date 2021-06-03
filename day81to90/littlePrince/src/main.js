let img = document.querySelector(".littlePrince");

setInterval(() => {
  let random = Math.floor(Math.random() * 2) + 1;
  console.log(random);
  img.setAttribute('src', `src/prince${random}.jpg`)
}, 3000);
