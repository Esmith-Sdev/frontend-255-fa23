//Event listener that will trigger when DOM is loaded (aka upon visiting webpage)
addEventListener("DOMContentLoaded", async function () {
    const response = await fetch("https://backend-255-fa23-5ct7.onrender.com")
    const songs = await response.json()
    let html = ""
    for (let song of songs) {
        html+= `<li>${song.title} - ${song.artist}</li>`
    }
    document.querySelector("#addedsong").innerHTML = html
})