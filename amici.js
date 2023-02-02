const nascondi = (event) => {
  event.target.parentElement.parentElement.parentElement.parentElement.remove();
  const middleReferece = (document.querySelector(".middle").style.marginRight =
    "0");
};

var aperto = false;

function toggle() {
  if (!aperto) {
    document.getElementById("roww").style.visibility = "visible";
    aperto = true;
  } else {
    aperto = false;
    document.getElementById("roww").style.visibility = "hidden";
  }
}
