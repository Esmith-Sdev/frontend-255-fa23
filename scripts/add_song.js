addEventListener("DOMContentLoaded", function () {
  document.querySelector("#addBtn").addEventListener("click", addSong);
});
//add the song to the db.. it has to be asynch function because we are calling data outside our server
const API_BASE = "https://backend-255-fa23-1-2xuv.onrender.com";
async function addSong() {
  //create a song obj based on the form that the user fills out.
  const song = {
    _id: document.querySelector("#songID").value,
    title: document.querySelector("#title").value,
    artist: document.querySelector("#artist").value,
    popularity: document.querySelector("#popularity").value,
    releaseDate: document.querySelector("#released").value,
    genre: document.querySelector("#genre").value
      ? document.querySelector("#genre").value.split(",")
      : [],
  };
  const response = await fetch(`${API_BASE}/api/songs/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(song),
  });

  if (response.ok) {
    const results = await response.json();
    alert("Added song with ID of" + results._id);

    document.querySelector("form").reset();
  } else {
    document.querySelector("#error").innerHTML = "Cannot add song";
  }
}
