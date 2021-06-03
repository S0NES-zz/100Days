const container = document.querySelector(".container");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  container.innerHTML = "";
  console.log(container.innerHTML);
  generateBlock();
  animate();
});
function generateBlock() {
  let random = Math.floor(Math.random() * 300) + 1;
  for (var i = 0; i <= random; i++) {
    const blocks = document.createElement("div");
    blocks.classList.add("block");
    container.appendChild(blocks);
  }
  console.log(random);
}
function animate() {
  anime({
    targets: ".block",
    translateX: function () {
      return anime.random(-1200, 1200);
    },
    translateY: function () {
      return anime.random(-700, 700);
    },
    scale: function () {
      return anime.random(1, 5);
    },
  });
}
