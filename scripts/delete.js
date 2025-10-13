const API_BASE = "https://backend-255-fa23-1-2xuv.onrender.com";
addEventListener("DOMContentLoaded", async function () {
  document.querySelector("#deleteBtn").addEventListener("click", deleteSong);
  getAllSongs();
});
async function getAllSongs() {
  const response = await fetch(`${API_BASE}/api/auth/`);
  if (response.ok) {
    const songs = await response.json();
    let html = "";
    for (let song of songs) {
      html += `<option value="${song._id}">${song.title}</option>`;
    }
    document.querySelector("#songDropDown").innerHTML = html;
  }
}
async function deleteSong() {
  const songId = document.querySelector("#songDropDown option:checked").value;
  const response = await fetch(`${API_BASE}/api/auth/` + songId, {
    method: "DELETE",
  });
  if (response.ok) {
    alert("Song Deleted");
    getAllSongs();
  } else {
    document.querySelector("#error").innerHTML = "Cannot delete song";
  }
}
