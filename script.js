function expandLeft() {
  document.getElementById("leftSidenav").style.left = "0";
  document.getElementById("middleSidenav").style.left = "80%";
  document.getElementById("rightSidenav").style.left = "90%";
  document.getElementById("titleLeft").style.left = "40%";
  document.getElementById("titleMiddle").style.left = "0";
  document.getElementById("titleRight").style.left = "0";
}

function expandMiddle() {
  document.getElementById("leftSidenav").style.left = "0";
  document.getElementById("middleSidenav").style.left = "10%";
  document.getElementById("rightSidenav").style.left = "90%";
  document.getElementById("titleLeft").style.left = "";
  document.getElementById("titleMiddle").style.left = "40%";
  document.getElementById("titleRight").style.left = "0";
}

function expandRight() {
  document.getElementById("leftSidenav").style.left = "0";
  document.getElementById("middleSidenav").style.left = "10%";
  document.getElementById("rightSidenav").style.left = "20%";
  document.getElementById("titleLeft").style.left = "0";
  document.getElementById("titleMiddle").style.left = "0";
  document.getElementById("titleRight").style.left = "40%";
}
