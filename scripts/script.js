//Event listener that will trigger when DOM is loaded (aka upon visiting webpage)
addEventListener("DOMContentLoaded", async function () {
  const API_BASE = "https://backend-255-fa23-1-2xuv.onrender.com";
  const response = await fetch(`${API_BASE}/api/songs`);
  const songs = await response.json();
  let html = "";
  for (let song of songs) {
    let songID = song._id;
    html += `<li>${song.title} - ${song.artist} - <a href="details.html?id=${songID}">Details</a> - <a href="edit.html?id=${songID}">Edit</a></li>`;
  }
  document.querySelector("#list_of_songs").innerHTML = html;
});
