const btn = document.getElementsByClassName("btn");
const win1 = document.getElementsByClassName("win1");
const win2 = document.getElementsByClassName("win2");
const win3 = document.getElementsByClassName("win3");
const winBoard = document.getElementsByClassName("winner");

let a = '<i class="fa-solid fa-check"></i>';
let b = '<i class="fa-solid fa-xmark"></i>';
let checked = true;

btn[0].addEventListener("click", function () {
  if (btn[0].innerHTML == "&nbsp;") {
    if (checked == true) {
      btn[0].innerHTML = a;
      checked = false;
    } else {
      btn[0].innerHTML = b;
      checked = true;
    }
    Winner();
  }
});
btn[1].addEventListener("click", function () {
  if (btn[1].innerHTML == "&nbsp;") {
    if (checked == true) {
      btn[1].innerHTML = a;
      checked = false;
    } else {
      btn[1].innerHTML = b;
      checked = true;
    }
    Winner();
  }
});
btn[2].addEventListener("click", function () {
  if (btn[2].innerHTML == "&nbsp;") {
    if (checked == true) {
      btn[2].innerHTML = a;
      checked = false;
    } else {
      btn[2].innerHTML = b;
      checked = true;
    }
    Winner();
  }
});
btn[3].addEventListener("click", function () {
  if (btn[3].innerHTML == "&nbsp;") {
    if (checked == true) {
      btn[3].innerHTML = a;
      checked = false;
    } else {
      btn[3].innerHTML = b;
      checked = true;
    }
    Winner();
  }
});
btn[4].addEventListener("click", function () {
  if (btn[4].innerHTML == "&nbsp;") {
    if (checked == true) {
      btn[4].innerHTML = a;
      checked = false;
    } else {
      btn[4].innerHTML = b;
      checked = true;
    }
    Winner();
  }
});
btn[5].addEventListener("click", function () {
  if (btn[5].innerHTML == "&nbsp;") {
    if (checked == true) {
      btn[5].innerHTML = a;
      checked = false;
    } else {
      btn[5].innerHTML = b;
      checked = true;
    }
    Winner();
  }
});
btn[6].addEventListener("click", function () {
  if (btn[6].innerHTML == "&nbsp;") {
    if (checked == true) {
      btn[6].innerHTML = a;
      checked = false;
    } else {
      btn[6].innerHTML = b;
      checked = true;
    }
    Winner();
  }
});
btn[7].addEventListener("click", function () {
  if (btn[7].innerHTML == "&nbsp;") {
    if (checked == true) {
      btn[7].innerHTML = a;
      checked = false;
    } else {
      btn[7].innerHTML = b;
      checked = true;
    }
    Winner();
  }
});
btn[8].addEventListener("click", function () {
  if (btn[8].innerHTML == "&nbsp;") {
    if (checked == true) {
      btn[8].innerHTML = a;
      checked = false;
    } else {
      btn[8].innerHTML = b;
      checked = true;
    }
    Winner();
  }
});

function Winner() {
  if (
    btn[0].innerHTML == btn[1].innerHTML &&
    btn[0].innerHTML == btn[2].innerHTML &&
    btn[0].innerHTML != "&nbsp;"
  ) {
    win2[0].style.display = "block";
    win2[0].style.top = "9.5vh";
    winBoard[0].style.display = "block";
    winBoard[0].innerHTML = btn[0].innerHTML + "<h1>WINNER</h1>";
    return;
  }
  if (
    btn[3].innerHTML == btn[4].innerHTML &&
    btn[3].innerHTML == btn[5].innerHTML &&
    btn[3].innerHTML != "&nbsp;"
  ) {
    win2[0].style.display = "block";
    win2[0].style.top = "29.5vh";
    winBoard[0].style.display = "block";
    winBoard[0].innerHTML = btn[3].innerHTML + "<h1>WINNER</h1>";
    return;
  }
  if (
    btn[6].innerHTML == btn[7].innerHTML &&
    btn[6].innerHTML == btn[8].innerHTML &&
    btn[6].innerHTML != "&nbsp;"
  ) {
    win2[0].style.display = "block";
    win2[0].style.top = "49.5vh";
    winBoard[0].style.display = "block";
    winBoard[0].innerHTML = btn[6].innerHTML + "<h1>WINNER</h1>";
    return;
  }
  if (
    btn[0].innerHTML == btn[3].innerHTML &&
    btn[0].innerHTML == btn[6].innerHTML &&
    btn[0].innerHTML != "&nbsp;"
  ) {
    win1[0].style.display = "block";
    win1[0].style.left = "9.5vh";
    winBoard[0].style.display = "block";
    winBoard[0].innerHTML = btn[0].innerHTML + "<h1>WINNER</h1>";
    return;
  }
  if (
    btn[1].innerHTML == btn[4].innerHTML &&
    btn[1].innerHTML == btn[7].innerHTML &&
    btn[1].innerHTML != "&nbsp;"
  ) {
    win1[0].style.display = "block";
    win1[0].style.left = "29.5vh";
    winBoard[0].style.display = "block";
    winBoard[0].innerHTML = btn[1].innerHTML + "<h1>WINNER</h1>";
    return;
  }
  if (
    btn[2].innerHTML == btn[5].innerHTML &&
    btn[2].innerHTML == btn[8].innerHTML &&
    btn[2].innerHTML != "&nbsp;"
  ) {
    win1[0].style.display = "block";
    win1[0].style.left = "50.5vh";
    winBoard[0].style.display = "block";
    winBoard[0].innerHTML = btn[2].innerHTML + "<h1>WINNER</h1>";
    return;
  }
  if (
    btn[0].innerHTML == btn[4].innerHTML &&
    btn[0].innerHTML == btn[8].innerHTML &&
    btn[0].innerHTML != "&nbsp;"
  ) {
    win3[0].style.display = "block";
    win3[0].style.transform = "rotate(44deg)";
    winBoard[0].style.display = "block";
    winBoard[0].innerHTML = btn[0].innerHTML + "<h1>WINNER</h1>";
    return;
  }
  if (
    btn[2].innerHTML == btn[4].innerHTML &&
    btn[2].innerHTML == btn[6].innerHTML &&
    btn[2].innerHTML != "&nbsp;"
  ) {
    win3[0].style.display = "block";
    win3[0].style.transform = "rotate(-44deg)";
    winBoard[0].style.display = "block";
    winBoard[0].innerHTML = btn[2].innerHTML + "<h1>WINNER</h1>";
    return;
  }
  if (
    btn[0].innerHTML != "&nbsp;" &&
    btn[1].innerHTML != "&nbsp;" &&
    btn[2].innerHTML != "&nbsp;" &&
    btn[3].innerHTML != "&nbsp;" &&
    btn[4].innerHTML != "&nbsp;" &&
    btn[5].innerHTML != "&nbsp;" &&
    btn[6].innerHTML != "&nbsp;" &&
    btn[7].innerHTML != "&nbsp;" &&
    btn[8].innerHTML != "&nbsp;"
  ) {
    winBoard[0].style.display = "block";
    winBoard[0].innerHTML = a + b + "<h1>DRAW</h1>";
  }
}

function Refresh() {
  for (let i = 0; i < btn.length; i++) {
    btn[i].innerHTML = "&nbsp;";
    win1[0].style.display = "none";
    win2[0].style.display = "none";
    win3[0].style.display = "none";
    winBoard[0].style.display = "none";
  }
}
let dark = true;
function Theme() {
  if (dark == true) {
    document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    for (let i = 0; i < btn.length; i++) {
      btn[i].style.backgroundColor = "white";
      btn[i].style.border = "white";
      btn[i].style.color = "black";
    }

    win1[0].style.backgroundColor = "black";
    win2[0].style.backgroundColor = "black";
    win3[0].style.backgroundColor = "black";
    document.getElementsByClassName("line1")[0].style.backgroundColor =
      "rgba(0, 0, 0, 0.6)";
    document.getElementsByClassName("line2")[0].style.backgroundColor =
      "rgba(0, 0, 0, 0.6)";
    document.getElementsByClassName("line3")[0].style.backgroundColor =
      "rgba(0, 0, 0, 0.6)";
    document.getElementsByClassName("line4")[0].style.backgroundColor =
      "rgba(0, 0, 0, 0.6)";
    winBoard[0].style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    winBoard[0].style.color = "black";
    winBoard[0].style.border = "none";
    let refresh = document.getElementsByClassName("refresh");
    let themes = document.getElementsByClassName("theme");
    refresh[0].style.backgroundColor = "white";
    refresh[0].classList.add("adu");
    refresh[0].style.border = "white";
    themes[0].style.backgroundColor = "white";
    themes[0].classList.add("adu");
    themes[0].style.border = "white";
    dark = false;
  } else {
    document.getElementsByTagName("body")[0].style.backgroundColor = "black";
    for (let i = 0; i < btn.length; i++) {
      btn[i].style.backgroundColor = "black";
      btn[i].style.border = "black";
      btn[i].style.color = "white";
    }

    win1[0].style.backgroundColor = "white";
    win2[0].style.backgroundColor = "white";
    win3[0].style.backgroundColor = "white";
    document.getElementsByClassName("line1")[0].style.backgroundColor =
      "rgba(255, 255, 255, 0.2)";
    document.getElementsByClassName("line2")[0].style.backgroundColor =
      "rgba(255, 255, 255, 0.2)";
    document.getElementsByClassName("line3")[0].style.backgroundColor =
      "rgba(255, 255, 255, 0.2)";
    document.getElementsByClassName("line4")[0].style.backgroundColor =
      "rgba(255, 255, 255, 0.2)";
    winBoard[0].style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    winBoard[0].style.color = "white";
    winBoard[0].style.border = "none";
    let refresh = document.getElementsByClassName("refresh");
    let themes = document.getElementsByClassName("theme");
    refresh[0].style.backgroundColor = "black";
    refresh[0].classList.remove("adu");
    refresh[0].style.border = "black";
    themes[0].style.backgroundColor = "black";
    themes[0].classList.remove("adu");
    themes[0].style.border = "black";
    dark = true;
  }
}
