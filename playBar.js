// MAKE IT WORK WITH API


// const API_STRIVES_SCHOOL = `https://striveschool-api.herokuapp.com/api/deezer/search`

// function handleSearchOnClick (){
//   document.querySelector('.containerJs1').innerHTML = " "
//   let form1Text = document.getElementById("form1").value
//   let queryToSearch = API_STRIVES_SCHOOL + '?q=' + form1Text
  
//   //console.log(queryToSearch);
//   songSearch(queryToSearch)
// }

// const songSearch = (input) => {
//   fetch(input)
//   .then((res) => {
//       if (res.ok) {
//           return res.json();
//       } else {
//           console.error("la richiesta non e andata a buon fine");
//       }
//   })
//   .then((jsonPromise) => {
//       let data = jsonPromise.data;
//       console.log(data);
//       data.forEach((element, i) => {
//           let listReference = document.querySelector('.containerJs1')
//           listReference.innerHTML += containerAlbum(
//               element.title_short,
//               element.album.cover_big,
//               element.artist.name,
//               element.album.title,
//               element.artist.picture,
//               element.preview,
//               i
//           )
//       })
//   })
// }

// function containerAlbum(songTitle, albumCover, artistName, albumtitle, artistPicture, track, i) {
//   return `
//   <div class="classCont col-12 col-md-3 text-light">
//       <div class="card shadow my-3 position-relative border-0 bg-dark m-3" id="num${i}" >
//           <h5 class="card-title fw-bold m-3 text-center h-25">${songTitle}</h5>
//           <button onclick='playMusic("${track}", "${songTitle}", "${artistName}")'>play</button>
//           <img src=${albumCover} class="card-img-top w-100 border-3">
//           <button class=" border-0 artist position-absolute badge rounded-rounded bg-success end-0 bottom-0 fs-6 m-2 text-light" onclick='handleArtistFunc("${songTitle}", "${artistName}", "${albumCover}")'>Add Album</button>
//           <button class=" border-0 song position-absolute badge rounded-rounded bg-danger start-0 bottom-0 fs-6 m-2 text-light" onclick='handleSongsFunc("${songTitle}", "${artistName}", "${albumCover}")'>Add song</button>
//           <button class=" border-0 album position-absolute badge rounded-rounded bg-primary end-0 top-0 fs-6 my-5 text-light" onclick='handleCauroselFunc("${songTitle}", "${artistName}", "${albumCover}")'>+</button>
//           <div class="d-flex">
//               <div class="col-6">
//                   <h5 class="card-title text-primary fw-bold my-4 text-center">${artistName}</h5>
//                   <h5 class="card-title fs-6 my-3 text-center">${albumtitle}</h5>
//               </div>
//               <img class="col-6 my-4" src=${artistPicture}>
//           </div>
//       </div>
//   </div>`
// }



// let audio = new Audio()

// function playMusic(song, title, artist) {
//   document.querySelector(".SongTitle").innerText = title
//   document.querySelector(".ArtistName").innerText = artist
//   let m = song
//   audio.src = m;
//   audio.play();
//   audio.addEventListener("loadedmetadata", () => {
//     document.querySelector(".totalDuration").innerHTML = `${updateTime(audio.duration)}`;
//     let maxVolume = audio.volume = 1
//     // minVolume = (audio.volume = 0)
//     // if (mouseIsDown === true) {
//     //   let v = (volume.offsetWidth/volumeRange.offsetWidth) * (maxVolume +2)
//     //   return 
//     // }
//     setInterval(() => {
//       if (volume.offsetWidth > (volumeRange.offsetWidth*50)/100 && volume.offsetWidth !== 0){
//         document.querySelector('.bi-volume-up').style.display = "block"
//         document.querySelector('.bi-volume-up').onclick = () => {audio.volume = 0, volume.style.width = "0"}
//         document.querySelector('.bi-volume-down').style.display = "none"
//         document.querySelector('.bi-volume-mute').style.display = "none"
//       } else {              
//         document.querySelector('.bi-volume-up').style.display = "none"
//         document.querySelector('.bi-volume-down').style.display = "block"
//         document.querySelector('.bi-volume-down').onclick = () => {audio.volume = 0, volume.style.width = "0"}
//         document.querySelector('.bi-volume-mute').style.display = "none"}
//       if (volume.offsetWidth === 0){
//         document.querySelector('.bi-volume-mute').style.display = "block"
//         document.querySelector('.bi-volume-mute').onclick = () => {audio.volume = 0, volume.style.width = "0"}
//         document.querySelector('.bi-volume-up').style.display = "none"
//         document.querySelector('.bi-volume-down').style.display = "none"
//       }
//       if (mouseIsDownOnVolume === true) {
//         console.log("pppppp");
//         let x = ((volume.offsetWidth/volumeRange.offsetWidth)) * maxVolume
//         return audio.volume = x
//         // console.log("p", volume.offsetWidth);
//         // console.log("t", volumeRange.offsetWidth);
//       }
//     },100)
//     setInterval(() => {
//       if (mouseIsDownOnPlayer === true) {
//         console.log("pppppp");
//         let x = (player.offsetWidth/playerRange.offsetWidth) *audio.duration
//         return audio.currentTime = x
//       }
//       // console.log("q", player.offsetWidth);
//       // console.log("e", playerRange.offsetWidth);
//       // console.log("r", audio.duration);
//       document.querySelector(".current-time").innerHTML = `${updateTime(audio.currentTime)}`;
//       player.style.width = `${Math.round((audio.currentTime/audio.duration)*playerRange.offsetWidth)}px`
//     }, 10)
//   })  
// }




let gigi = "https://cdns-preview-7.dzcdn.net/stream/c-704c1595f88a2ba22598d1e24c53d8b7-5.mp3"
let audio = new Audio(gigi) 



let liked = document.querySelector(".liked")
let like = document.querySelector(".like")
like.onclick = () => {
    like.style.display = 'none'
    liked.style.display = 'block'
}
liked.onclick = () => {
    liked.style.color = '#2ecc71'
    like.style.display = 'block'
    liked.style.display = 'none'
}
let playing = document.querySelector(".play")
let paused = document.querySelector(".pause")

if (audio.play()) {
    playing.style.display = 'none'
    paused.style.display = 'block'
}

playing.onclick = () => {
    playing.style.display = 'none'
    paused.style.display = 'block'
    audio.play()
}
paused.onclick = () => {
    playing.style.display = 'block'
    paused.style.display = 'none'
    audio.pause()
}

let rep = document.querySelector(".repeat")
let rep1 = document.querySelector(".repeat1")

rep.onclick = () => {
    rep.style.display = 'none'
    rep1.style.display = 'block'
    rep1.style.color = '#2ecc71'
}
rep1.onclick = () => {
    rep.style.display = 'block'
    rep1.style.display = 'none'
}

// The mousemove event is fired at an element when a pointing device (usually a mouse) is moved while the cursor's hotspot is inside it.
//Mousedown is fired while the button is initially pressed, mouseup is fired when the button is released.
const volume = document.querySelector('.volume');
const volumeRange = document.querySelector('.volume-range');
const volumeContainer = document.querySelector('.volume-container');
const volumeBtn = document.querySelector('.volume-button');
const volumeRangeWidth = volumeRange.getBoundingClientRect().width

const player = document.querySelector('.player');
const playerRange = document.querySelector('.player-range');
const playerContainer = document.querySelector('.player-container');
const playerBtn = document.querySelector('.player-button');
const playerRangeWidth = playerRange.getBoundingClientRect().width


volumeContainer.addEventListener("mouseup", up);
volumeContainer.addEventListener("mousedown", downOnVolume);
volumeContainer.addEventListener("mousedown", volumeSlide);
volumeContainer.addEventListener("mousemove", volumeSlide);

playerContainer.addEventListener("mouseup", up);
playerContainer.addEventListener("mousedown", downOnPlayer);
playerContainer.addEventListener("mousedown", playerSlide);
playerContainer.addEventListener("mousemove", playerSlide)

let mouseIsDownOnPlayer = false;
let mouseIsDownOnVolume = false;

function downOnVolume() {
  mouseIsDownOnVolume = true;
}

function downOnPlayer() {
  mouseIsDownOnPlayer = true;
}

function up() {
  mouseIsDownOnPlayer = false;
  mouseIsDownOnVolume = false
}

function volumeSlide(event) {
  if (mouseIsDownOnVolume === true) {
    let x = Math.floor(event.offsetX );
    let pointer = volume.style.width = (x) + 'px';
    console.log(pointer);
  }
}

function playerSlide(event) {
  if (mouseIsDownOnPlayer === true) {
    let x = Math.floor(event.offsetX);
    let pointer = player.style.width = (x) + 'px';
    console.log(pointer);
  }
}

function updateTime (time) {
    const seconds = String(Math.floor(time % 60) || 0).padStart("2", "0");
    const minutes = String(Math.floor(time / 60) || 0).padStart('0');
    let timer = minutes + "" + seconds
    return timer
}

audio.addEventListener("loadedmetadata", () => {
  document.querySelector(".totalDuration").innerHTML = `${updateTime(audio.duration)}`;
  let maxVolume = audio.volume = 1
  // minVolume = (audio.volume = 0)
  // if (mouseIsDown === true) {
  //   let v = (volume.offsetWidth/volumeRange.offsetWidth) * (maxVolume +2)
  //   return 
  // }
  setInterval(() => {
    if (volume.offsetWidth > (volumeRange.offsetWidth*50)/100 && volume.offsetWidth !== 0){
        document.querySelector('.bi-volume-up').style.display = "block"
        document.querySelector('.bi-volume-up').onclick = () => {audio.volume = 0, volume.style.width = "0"}
        document.querySelector('.bi-volume-down').style.display = "none"
        document.querySelector('.bi-volume-mute').style.display = "none"
      } else {              
        document.querySelector('.bi-volume-up').style.display = "none"
        document.querySelector('.bi-volume-down').style.display = "block"
        document.querySelector('.bi-volume-down').onclick = () => {audio.volume = 0, volume.style.width = "0"}
        document.querySelector('.bi-volume-mute').style.display = "none"}
      if (volume.offsetWidth === 0){
        document.querySelector('.bi-volume-mute').style.display = "block"
        document.querySelector('.bi-volume-mute').onclick = () => {audio.volume = 0, volume.style.width = "0"}
        document.querySelector('.bi-volume-up').style.display = "none"
        document.querySelector('.bi-volume-down').style.display = "none"
      }
    if (mouseIsDownOnVolume === true) {
      console.log("pppppp");
      let x = ((volume.offsetWidth/volumeRange.offsetWidth)) * maxVolume
      return audio.volume = x
      // console.log("p", volume.offsetWidth);
      // console.log("t", volumeRange.offsetWidth);
    }
  },100)
  setInterval(() => {
    if (mouseIsDownOnPlayer === true) {
      console.log("pppppp");
      let x = (player.offsetWidth/playerRange.offsetWidth) *audio.duration
      return audio.currentTime = x
    }
    // console.log("q", player.offsetWidth);
    // console.log("e", playerRange.offsetWidth);
    // console.log("r", audio.duration);
    document.querySelector(".current-time").innerHTML = `${updateTime(audio.currentTime)}`;
    player.style.width = `${Math.round((audio.currentTime/audio.duration)*playerRange.offsetWidth)}px`
  }, 10)
})

