function timing() {
  let d = new Date();
  let hour = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();

  let date = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();

  let day = d.getDay();

  let s = document.getElementsByTagName("span");
  if (hour <= 12) {
    s[0].innerText =
      (hour <= 9 ? "0" + hour : hour) +
      ":" +
      (min > 9 ? min : "0" + min) +
      ":" +
      (sec > 9 ? sec : "0" + sec) +
      " AM";
  } else {
    s[0].innerText =
      "0" +
      (hour - 12) +
      ":" +
      (min > 9 ? min : "0" + min) +
      ":" +
      (sec > 9 ? sec : "0" + sec) +
      " PM";
  }
  // s[0].innerText=d.toLocaleTimeString()

  switch (day) {
    case 0:
      s[1].innerText = "Sunday";
      break;
    case 1:
      s[1].innerText = "Monday";
      break;
    case 2:
      s[1].innerText = "Tuesday";
      break;
    case 3:
      s[1].innerText = "Wednessday";
      break;
    case 4:
      s[1].innerText = "Thursday";
      break;
    case 5:
      s[1].innerText = "Friday";
      break;
    case 6:
      s[1].innerText = "Suturday";
      break;
  }

  switch (month) {
    case 0:
      s[2].innerText = "Jan";
      break;
    case 1:
      s[2].innerText = "Feb";
      break;
    case 2:
      s[2].innerText = "Mar";
      break;
    case 3:
      s[2].innerText = "Apr";
      break;
    case 4:
      s[2].innerText = "May";
      break;
    case 5:
      s[2].innerText = "Jun";
      break;
    case 6:
      s[2].innerText = "Jul";
      break;
    case 7:
      s[2].innerText = "Aug";
      break;
    case 8:
      s[2].innerText = "Sep";
      break;
    case 9:
      s[2].innerText = "Oct";
      break;
    case 10:
      s[2].innerText = "Nov";
      break;
    case 11:
      s[2].innerText = "Dec";
      break;
  }

  s[3].innerText = date;
  s[4].innerText = year;

  let t = document.getElementsByClassName("day");
}
