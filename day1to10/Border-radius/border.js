let bottomRight, topLeft, topRight, bottomLeft, radiusValue;
let brValue, tlValue, trValue, blValue, preview, btn;

bottomRight = document.getElementById("bottomRight");
bottomLeft = document.getElementById("bottomLeft");
topRight = document.getElementById("topRight");
topLeft = document.getElementById("topLeft");
box = document.getElementById("borderBox");
copyBtn = document.getElementById("copy");
preview = document.getElementById("preview");

bottomRight.addEventListener("change", () => {
  brValue = bottomRight.value;
  box.style.borderBottomRightRadius = brValue + "px";
  preview.style.borderBottomRightRadius = brValue + "px";
  ifAll();
});
bottomLeft.addEventListener("change", () => {
  blValue = bottomLeft.value;
  box.style.borderBottomLeftRadius = blValue + "px";
  preview.style.borderBottomLeftRadius = blValue + "px";
  ifAll();
});
topRight.addEventListener("change", () => {
  trValue = topRight.value;
  box.style.borderTopRightRadius = trValue + "px";
  preview.style.borderTopRightRadius = trValue + "px";
  ifAll();
});
topLeft.addEventListener("input", () => {
  tlValue = topLeft.value;
  box.style.borderTopLeftRadius = tlValue + "px";
  preview.style.borderTopLeftRadius = tlValue + "px";
  ifAll();
});

function ifAll() {
  if (
    brValue !== undefined &&
    blValue !== undefined &&
    trValue !== undefined &&
    tlValue !== undefined
  ) {
    preview.value =
      "border-radius: " +
      tlValue +
      "px " +
      trValue +
      "px " +
      brValue +
      "px " +
      blValue +
      "px ;";
  }
}

copyBtn.addEventListener("click", () => {
  let copyText = document.getElementById("preview");

    console.log(copyText);
  copyText.select();
  copyText.setSelectionRange(0, 99999);
    console.log(copyText);
  document.execCommand("copy");
  
});