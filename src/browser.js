const api_key = 'GET A KEY'

function row_html(album) {
  return `<div class="row m-t-1">
      <div class="col-xs-12">
        <img src="${album.image[2]['#text']}" class='pull-left m-r-1'>
        <h2>${album.name}</h2>
        <p>${album.artist.name}</p>
      </div>
    </div>`
}


let search_box = document.getElementById("search");

search_box.addEventListener("submit", (event) => {
  event.preventDefault();
  let input = document.getElementById("artist").value;
  let url = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${input}&api_key=${api_key}&format=json&limit=5`
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const albums = document.getElementById("albums-container");
      albums.innerHTML = "";
      data.topalbums.album.forEach((album) => {
        albums.insertAdjacentHTML("beforeend", row_html(album));
      });
    });
});

