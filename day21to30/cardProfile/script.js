let inpCover = document.getElementById("inputCover");
let labelCover = document.getElementById("coverLabel");
let labelProfile = document.getElementById("imgLabel");
let inpProfile = document.getElementById("inputImg");

inpCover.addEventListener("change", e => {
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
      labelCover.style.background = "url(" + src + ")";
    } else {
      alert("Invalid Format");
    }
  }
});
inpProfile.addEventListener("change", e => {
  e.preventDefault();
  const file = e.target.files;
  const src = URL.createObjectURL(file[0]);
  console.log(src);
  if (file !== 0 || file !== undefined) {
    if (
      file[0].type === "image/jpeg" ||
      file[0].type === "image/tiff" ||
      file[0].type === "image/png" ||
      file[0].type === "image/gif" ||
      file[0].type === "image/svg"
    ) {
      labelProfile.style.background = " url(" + src + ")";
    } else {
      alert("Invalid Format");
    }
  }
});
