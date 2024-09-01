const light = document.getElementsByClassName("light1")[0];
const slider = document.getElementsByClassName("slider")[0];
const slider_cont = document.getElementsByClassName("brightness-controls")[0];
function brightness() {
  var b_value = slider.value / 100;
  light.style.opacity = b_value;
}
slider.addEventListener("input", brightness);
light.style.opacity = 0;
let bulb = false;
function turn_on() {
  if (bulb == false) {
    slider.style.cssText = "width:300px;";
    slider_cont.style.cssText = "margin: 0px 10px;opacity: 1;";
    light.style.cssText = "opacity: 0.7;transition: all 0.1s;";
    bulb = true;
  } else {
    slider.style.cssText = "width:0px;";
    slider_cont.style.cssText = "margin: 0px;opacity: 0;";
    light.style.cssText = "opacity: 0;transition: all 2s;";
    bulb = false;
  }
}
