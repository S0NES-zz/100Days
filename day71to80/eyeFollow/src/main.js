let eyes = document.querySelectorAll(".eyes");

document.addEventListener("mousemove", (e) => {
  let x = (e.clientX * 100) / window.innerWidth;
  let y = (e.clientY * 100) / window.innerHeight;

  for (let i = 0; i < 2; i++) {
    eyes[i].style.left = `${x}%`;
    eyes[i].style.top = `${y}%`;
    eyes[i].style.transform = `translate(-${x}%, -${y}%)`;
  };
});
