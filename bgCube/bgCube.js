inpFile = document.getElementById("inpFile");
videos = document.querySelectorAll(".videos");

inpFile.addEventListener("change", handleFile);

function handleFile(e) {
  const file = e.target.files;
  const src = URL.createObjectURL(file[0]);
  if (file !== 0 || file !== undefined) {
    if (
      file[0].type === "image/jpeg" ||
      file[0].type === "image/tiff" ||
      file[0].type === "image/png" ||
      file[0].type === "image/gif" ||
      file[0].type === "image/svg"
    ) {
      handleImg(src);
    } else if (file[0].type === "video/mp4") {
      handleVideo(src);
    }
  }
}
function handleImg(src) {
  videos.forEach((video) => {
      video.src = "";
    video.poster = src;
  });
}
function handleVideo(src) {
  videos.forEach((video) => {
    video.src = src;
  });
}
