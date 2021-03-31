let toggle = document.getElementById("toggle");
let labelToggle = document.getElementById("labelToggle");
let root = document.body;

console.log(toggle);
toggle.addEventListener("change", () => {
  if (toggle.checked == true) {
    lightMode();
    labelToggle.innerText = "Light Mode";
  }
  if (toggle.checked == false) {
    darkMode();
    labelToggle.innerText = "Dark Mode";
  }
});

function lightMode() {
  root.style.setProperty("--bg", "hsl(0, 0%, 100%)");
  root.style.setProperty("--cardBg", "hsl(227, 47%, 96%)");
  root.style.setProperty("--text", "hsl(228, 12%, 44%)");
  root.style.setProperty("--headline", "hsl(230, 17%, 14%)");
}
function darkMode() {
  root.style.setProperty("--bg", " hsl(230, 17%, 14%)");
  root.style.setProperty("--cardBg", "hsl(228, 28%, 20%)");
  root.style.setProperty("--text", "hsl(228, 34%, 66%)");
  root.style.setProperty("--headline", "hsl(0, 0%, 100%)");
}
