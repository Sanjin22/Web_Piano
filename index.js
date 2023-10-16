for (let i = 0; i < document.querySelectorAll(".key").length; i++) {
  document.querySelectorAll(".key")[i].addEventListener("click", function () {
    var slovoSaKockice = this.innerHTML;
    oglasiZvuk(slovoSaKockice);
    activeLEDButton();
  });
}

document.addEventListener("keydown", function (event) {
  oglasiZvuk(event.key.toUpperCase());
  buttonAnimation(event.key.toUpperCase());
  console.log(event.key);
  activeLEDButton();
});

const volumeRange = document.getElementById("volumeRange");
const volumeValue = document.getElementById("volumeValue");

function promijeniZvuk(trazenoSlovo) {
  trazenoSlovo.volume = parseFloat(volumeRange.value);
  volumeValue.textContent = trazenoSlovo.volume.toFixed(2);
  volumeRange.addEventListener("input", () => {
    const volume = parseFloat(volumeRange.value);
    trazenoSlovo.volume = volume;
    volumeValue.textContent = volume.toFixed(2);
  });
}

function oglasiZvuk(slovo) {
  switch (slovo) {
    case "A":
      var slovoA = new Audio("./Sounds/key01.mp3");
      promijeniZvuk(slovoA);
      slovoA.play();
      break;
    case "S":
      var slovoS = new Audio("./Sounds/key02.mp3");
      promijeniZvuk(slovoS);
      slovoS.play();
      break;
    case "D":
      var slovoD = new Audio("./Sounds/key03.mp3");
      promijeniZvuk(slovoD);
      slovoD.play();
      break;
    case "F":
      var slovoF = new Audio("./Sounds/key04.mp3");
      promijeniZvuk(slovoF);
      slovoF.play();
      break;
    case "G":
      var slovoG = new Audio("./Sounds/key05.mp3");
      promijeniZvuk(slovoG);
      slovoG.play();
      break;
    case "H":
      var slovoH = new Audio("./Sounds/key06.mp3");
      promijeniZvuk(slovoH);
      slovoH.play();
      break;
    case "J":
      var slovoJ = new Audio("./Sounds/key07.mp3");
      promijeniZvuk(slovoJ);
      slovoJ.play();
      break;
    case "K":
      var slovoK = new Audio("./Sounds/key08.mp3");
      promijeniZvuk(slovoK);
      slovoK.play();
      break;
    case "L":
      var slovoL = new Audio("./Sounds/key09.mp3");
      promijeniZvuk(slovoL);
      slovoL.play();
      break;
    case "Č":
      var slovoČ = new Audio("./Sounds/key10.mp3");
      promijeniZvuk(slovoČ);
      slovoČ.play();
      break;
    case "W":
      var slovoW = new Audio("./Sounds/key11.mp3");
      promijeniZvuk(slovoW);
      slovoW.play();
      break;
    case "E":
      var slovoE = new Audio("./Sounds/key12.mp3");
      promijeniZvuk(slovoE);
      slovoE.play();
      break;
    case "T":
      var slovoT = new Audio("./Sounds/key13.mp3");
      promijeniZvuk(slovoT);
      slovoT.play();
      break;
    case "Z":
      var slovoZ = new Audio("./Sounds/key14.mp3");
      promijeniZvuk(slovoZ);
      slovoZ.play();
      break;
    case "U":
      var slovoU = new Audio("./Sounds/key15.mp3");
      promijeniZvuk(slovoU);
      slovoU.play();
      break;
    case "O":
      var slovoO = new Audio("./Sounds/key16.mp3");
      promijeniZvuk(slovoO);
      slovoO.play();
      break;
    case "P":
      var slovoP = new Audio("./Sounds/key17.mp3");
      promijeniZvuk(slovoP);
      slovoP.play();
      break;
    default:
      console.log(slovo);
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("animation");

  setTimeout(function () {
    activeButton.classList.remove("animation");
  }, 100);
}

function activeLEDButton() {
  var activeButton = document.querySelector(".Circle");

  activeButton.style.backgroundColor = "red";
  activeButton.classList.add("activeLED");

  setTimeout(function () {
    activeButton.classList.remove("activeLED");
    activeButton.style.backgroundColor = "rgb(39, 38, 38)";
  }, 1000);
}
