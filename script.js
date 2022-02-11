var kalimat = [
  "Semangat",
  "Kamu Pasti Bisa",
  "Capai Semua Impianmu"
];

var index = 0;
var indexKe = 0;
var type;
var text = document.querySelector(".typer");

function Ketik() {
  var textType = kalimat[index].substring(0, indexKe + 1);
  text.innerHTML = textType;
  indexKe++;

  if (textType === kalimat[index]) {
    clearInterval(type);
    setTimeout(function () {
      type = setInterval(Hapus, 100);
    }, 800);
  }
}

function Hapus() {
  var textType = kalimat[index].substring(0, indexKe - 1);
  text.innerHTML = textType;
  indexKe--;

  if (textType === "") {
    clearInterval(type);

    if (index == kalimat.length - 1) index = 0;
    else index++;

    indexKe = 0;

    setTimeout(function () {
      type = setInterval(Ketik, 120);
    }, 800);
  }
}

type = setInterval(Ketik, 150);
