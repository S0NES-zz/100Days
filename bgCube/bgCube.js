file = document.getElementById("inpFile");
videos = document.querySelectorAll(".videos");

file.addEventListener("change", e => {
  videos.forEach(video => {
    video.src = e.target.defaultValue;
    console.log(e.target);
  });
});

