var qrcode = new QRCode(document.getElementById("qrcode"));

function makeCode() {
  var elText = document.getElementById("text");

  if (!elText.value) {
    alert("Input a text");
    elText.focus();
    return;
  }

  qrcode.makeCode(elText.value);
}

makeCode();

document.getElementById("text").addEventListener("input", function () {
  makeCode();
});
