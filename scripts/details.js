addEventListener("DOMContentLoaded", async function () {
  //grab search params in URL after the question mark

  const urlparam = new URLSearchParams(window.location.search);
  const songID = urlparam.get("id");
  console.log(songID);
  const API_BASE = "https://backend-255-fa23-1-2xuv.onrender.com";

  const response = await fetch(`${API_BASE}/api/songs/` + songID);
  const song = await response.json();
  console.log(song);

  let heading = "";
  heading += `${song.title}`;
  document.querySelector("h1").innerHTML = heading;
  let html = "";
  html += `
    <h2>Artist - ${song.artist} </h2>
    <h2>Popularity - ${song.popularity} </h2>
    <h2>Release Date - ${song.releaseDate} </h2>
    <h2>Genre - ${song.genre} </h2>
  `;
  document.querySelector("div").innerHTML = html;
});
