const likes = document.querySelectorAll(".likes");

likes.forEach((like) => {
  like.addEventListener("mousedown", (e) => {
    like.style.background = "#fff";
    like.style.color = "#03d537";
    like.querySelector(".text").innerHTML =
      '<span class="grey-text">Sent to:</span> FLORIN';

    createLikes(like.querySelector(".icon-container"));
  });

  like.addEventListener("mouseup", (e) => {
    like.style.background = "#03d537";
    like.style.color = "#fff";
    like.querySelector(".text").innerHTML =
      'THANK YOU! <i class="fas fa-redo"></i>';
  });
});

function createLikes(container) {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const hand = document.createElement("span");
      hand.classList.add("hand");
      hand.innerHTML = '<i class="fas fa-thumbs-up"></i>';
      hand.style.left = Math.random() * 100 + "%";
      hand.style.top = Math.random() * 100 + "%";
      hand.style.fontSize = Math.random() * 20 + 5 + "px";
      hand.style.animationDuration = Math.random() * 2 + 3 + "s";
      container.appendChild(hand);

      setTimeout(() => {
        hand.remove();
      }, 3000);
    }, i * 100);
  }
}