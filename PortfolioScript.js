let card = document.getElementsByClassName("portfolio-card");
card[1].style.display = "none";
card[2].style.display = "none";
function display(x) {
  if (x == 1) {
    card[0].style.display = "flex";
    card[1].style.display = "none";
    card[2].style.display = "none";
  }
  if (x == 2) {
    card[0].style.display = "none";
    card[1].style.display = "flex";
    card[2].style.display = "none";
  }
  if (x == 3) {
    card[0].style.display = "none";
    card[1].style.display = "none";
    card[2].style.display = "flex";
  }
}
