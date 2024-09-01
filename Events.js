document.getElementsByClassName("box4")[0].onclick = () => {
  document.getElementsByClassName("security-container")[0].style.cssText =
    "display: flex !important";
};
document.getElementById("close").onclick = () => {
  document.getElementsByClassName("security-container")[0].style.cssText =
    "display: none !important";
};
securitykey = document.getElementById("securitykey");
securitykey.onclick = () => {
  document.getElementsByClassName("invalid")[0].style.cssText =
    "display: none;";
};
document.getElementById("verify").onclick = () => {
  if (securitykey.value == "8328841403") {
    document.getElementsByClassName("box4")[0].style.cssText =
      "display: none !important;";
    document.getElementsByClassName("box5")[0].style.cssText =
      "display: block !important;";
    document.getElementsByClassName("box6")[0].style.cssText =
      "display: block !important;";
    document.getElementsByClassName("box6")[1].style.cssText =
      "display: block !important;";
    document.getElementsByClassName("box7")[0].style.cssText =
      "display: block !important;";
    document.getElementsByClassName("box8")[0].style.cssText =
      "display: block !important;";
    document.getElementsByClassName("box9")[0].style.cssText =
      "display: block !important;";
    document.getElementsByClassName("security-container")[0].style.cssText =
      "display: none !important;";
  } else {
    // document.getElementsByClassName("box")[0].style.cssText = "background-color: rgb(255, 179, 179);";
    securitykey.value = "";
    document.getElementsByClassName("invalid")[0].style.cssText =
      "display: block;";
  }
};
