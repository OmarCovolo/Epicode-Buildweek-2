window.localStorage.getItem("albumeValue");
let getAlbum = localStorage.getItem("albumeValue")
let albumID = JSON.parse(getAlbum)
console.log(albumID);

let apiStrives = `https://striveschool-api.herokuapp.com/api/deezer/artist/${albumID[1]}`