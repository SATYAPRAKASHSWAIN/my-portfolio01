// Changing the wallpaper background

rand = parseInt(Math.random() * 7 + 1);
document.getElementById("change").style.backgroundImage =
  "url(./images/bg" + rand + ".WEBP)";

// Changing text heading in the webpage

let heading = document.getElementsByClassName("heading");
let x = "SATYA'S CREATION";
let y = "Hii I'M SATYAPRAKASH";
let z = "SATYAPRAKASH SWAIN";
heading[0].innerHTML = "";
let to1 = setInterval(topic1, 150);
let re1 = setInterval(remove1, 20);
let to2 = setInterval(topic2, 150);
let re2 = setInterval(remove2, 20);
let to3 = setInterval(topic3, 150);
let re3 = setInterval(remove3, 20);
let i = 0;
function topic1() {
  heading[0].innerHTML += x.charAt(i);
  i++;
  if (i == x.length + 2) {
    clearInterval(to1);
  }
}
function remove1() {
  if (i >= x.length + 2) {
    heading[0].innerHTML = heading[0].innerHTML.slice(0, -1);
    i++;
    if (i == (x.length + 2) * 2) {
      clearInterval(re1);
    }
  }
}
function topic2() {
  if (i >= (x.length + 2) * 2) {
    heading[0].innerHTML += y.charAt(i - (x.length + 2) * 2);
    i++;
    if (i == (x.length + 2) * 2 + y.length + 2) {
      clearInterval(to2);
    }
  }
}
function remove2() {
  if (i >= (x.length + 2) * 2 + y.length + 2) {
    heading[0].innerHTML = heading[0].innerHTML.slice(0, -1);
    i++;
    if (i == (x.length + 2) * 2 + (y.length + 2) * 2) {
      clearInterval(re2);
    }
  }
}
function topic3() {
  if (i >= (x.length + 2) * 2 + (y.length + 2) * 2) {
    heading[0].innerHTML += z.charAt(
      i - ((x.length + 2) * 2 + (y.length + 2) * 2)
    );
    i++;
    if (i == (x.length + 2) * 2 + (y.length + 2) * 2 + z.length + 2) {
      clearInterval(to3);
    }
  }
}
function remove3() {
  if (i >= (x.length + 2) * 2 + (y.length + 2) * 2 + z.length + 2) {
    heading[0].innerHTML = heading[0].innerHTML.slice(0, -1);
    i++;
    if (i == (x.length + 2) * 2 + (y.length + 2) * 2 + (z.length + 2) * 2) {
      clearInterval(re3);
      to1 = setInterval(topic1, 150);
      re1 = setInterval(remove1, 20);
      to2 = setInterval(topic2, 150);
      re2 = setInterval(remove2, 20);
      to3 = setInterval(topic3, 150);
      re3 = setInterval(remove3, 20);
      i = 0;
    }
  }
}

function linkRedirect() {
  window.location = "./AllLinks.html";
}
function aboutRedirect() {
  window.location = "./About.html";
}
function myPortfolio() {
  window.location = "./Portfolio.html";
}
function myevents() {
  window.location = "./Events.html";
}
function aboutStudyMaterial() {
  window.location = "./study material/index.html";
}
