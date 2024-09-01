const ttl = document.getElementsByClassName("title");
const yr = document.getElementsByClassName("year");
const desc = document.getElementsByClassName("desc");
const val = document.getElementsByClassName("val");
const poster = document.getElementsByClassName("container");
const dtls = document.getElementsByClassName("dtls");
const genre = document.getElementsByClassName("genre");
const cntbtr = document.getElementsByClassName("cntbtr");
const award = document.getElementsByClassName("award");
const drtn = document.getElementsByClassName("duration");
const bx = document.getElementsByClassName("bx");
let movieinput1 = () => {
  let movie = document.getElementById("movie").value;
  getMovie(movie);
};
let movieinput2 = () => {
  let movie = document.getElementById("movie00").value;
  getMovie(movie);
  document.getElementsByTagName("section")[0].style.display = "none";
};
let getMovie = (movie) => {
  // let movie = document.getElementById("movie").value;
  let url = "https://www.omdbapi.com/?t=" + movie + "&apikey=c581aa41";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < bx.length; i++) {
        bx[i].classList.remove("bxadd");
      }
      console.log(data);
      ttl[0].innerText = data.Title;
      yr[0].innerText = data.Year;
      desc[0].innerText = data.Plot;
      //==========================================================
      if (data.imdbRating == "N/A") bx[0].classList.add("bxadd");
      else val[0].innerText = data.imdbRating + " / 10";
      //==========================================================
      if (data.Ratings[1] == "[object Object]")
        val[1].innerText = data.Ratings[1].Value;
      else bx[1].classList.add("bxadd");
      //==========================================================
      if (data.Metascore == "N/A") bx[2].classList.add("bxadd");
      else val[2].innerText = data.Metascore + " / 100";
      //==========================================================
      if (data.BoxOffice == "N/A" || data.BoxOffice == undefined)
        bx[3].classList.add("bxadd");
      else val[3].innerText = data.BoxOffice;
      //==========================================================
      if (data.totalSeasons == "N/A" || data.totalSeasons == undefined)
        bx[4].classList.add("bxadd");
      else val[4].innerText = data.totalSeasons;
      //==========================================================
      if (data.Rated == "N/A") bx[5].classList.add("bxadd");
      else val[5].innerText = data.Rated;
      //==========================================================
      poster[0].style.cssText = "background-image: url(" + data.Poster + ");";
      document.getElementById("movie").value = "";
      dtls[0].innerText = data.Released;
      dtls[1].innerText = data.Language;
      dtls[2].innerText = data.Country;
      let gnr = data.Genre;
      let ary = gnr.split(",");
      genre[0].innerHTML = '<div class="gl">' + data.Type + "</div>";
      for (let i = 0; i < ary.length; i++) {
        genre[0].innerHTML += '<div class="gl">' + ary[i] + "</div>";
      }
      cntbtr[0].innerText = data.Director;
      cntbtr[1].innerText = data.Actors;
      cntbtr[2].innerText = data.Writer;
      award[0].innerText = data.Awards;
      drtn[0].innerText = "(" + data.Runtime + ")";
    });
};

document.getElementById("movie").addEventListener("change", movieinput1);
document.getElementById("movie00").addEventListener("change", movieinput2);

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
