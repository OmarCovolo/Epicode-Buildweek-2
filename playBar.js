const API_STRIVES_SCHOOL = `https://striveschool-api.herokuapp.com/api/deezer/search`


function handleSearchOnClick (){
  document.querySelector('.containerJ').innerHTML = " "
  document.querySelector('.containerJs1').innerHTML = " "
  let form1Text = document.getElementById("form1").value
  let queryToSearch = API_STRIVES_SCHOOL + '?q=' + form1Text
  
  //console.log(queryToSearch);
  songSearch(queryToSearch)
}
let index = API_STRIVES_SCHOOL + '?q=' + "*"
window.onload = () =>{songSearch(index)}

const songSearch = (input) => {
  fetch(input)
  .then((res) => {
      if (res.ok) {
          return res.json();
      } else {
          console.error("la richiesta non e andata a buon fine");
      }
  })
  .then((jsonPromise) => {
      let data = jsonPromise.data;
      console.log(data);
      let newsReference = document.querySelector('.containerJ')
      console.log(data[0]);
      newsReference.innerHTML += albumNews(
        data[0].album.cover_big,
        data[0].artist.name,
        data[0].album.title,
        data[0].preview,
        data[0].album.id,
        data[0].title_short,
      )
      data.forEach((element, i) => {
          let listReference = document.querySelector('.containerJs1')
          listReference.innerHTML += containerAlbum(
              element.title_short,
              element.album.cover_big,
              element.artist.name,
              element.album.title,
              element.artist.picture,
              element.preview,
              element.artist.id,
              element.album.id,
              i
          )
      })
  })
}


function containerAlbum(songTitle, albumCover, artistName, albumtitle, artistPicture, track, artistid, albumId, i) {
  return `
  <div class="classCont col-12 col-md-3 text-light">
  <div id="card">
      <img src="${artistPicture}" onclick='bringToAlbumPage("${albumtitle}","${albumId}")' alt="Card_image">
      <i id="pulsante" onclick='playMusic("${track}", "${songTitle}", "${artistName}")' class="bi play mx-2 fs-3 bi-play-circle-fill"></i>
        <h5>${songTitle}</h5>
        <p onclick='bringToArtistPage("${artistName}","${artistid}")'>${artistName}</p>
  </div>
</div>
  `
}

function albumNews(albumCover, artistName, albumtitle, track, artistid, albumId, i, title) {
    console.log("ddd", track );
    return `
  <div class="newsCont col-12 col-md-3 text-light d-flex m-5 w-100">
      <img class="m-3" src="${albumCover}" onclick='bringToAlbumPage("${albumtitle}","${albumId}")' alt="Card_image"/>
      <div class="d-flex flex-column ms-3 w-100">
        <div class="d-flex justify-content-between"><h6>Album</h6><h6 class="border rounded-5 p-1 bg-secondary-transparent" style="margin-right:70px">nascondi sezione</h6></div>
        <h1>${albumtitle}</h1>
        <p onclick='bringToArtistPage("${artistName}","${artistid}")'>${artistName}</p>
        <p>Ascolta il nuovo singolo di ${artistName}</p>
        <div class="d-flex">
          <button class="bi play text-white mx-2 fs-5 rounded-5 bg-dark text-center border-1">Salva</button>
          <button onclick='playMusic("${track}", "${title}", "${artistName}")' class="bi play text-white mx-2 fs-4 rounded-5 bg-success text-center ">Play</button>
          </div>
      </div>
  </div>
  `
}
const cardLarge = async function () {
  try {
    let res = await fetch(' https://striveschool-api.herokuapp.com/api/deezer/album/364187517')
    console.log(res)
    if (res.ok) {
      let dataLong = await res.json()
      console.log('datacard', dataLong)
      let card=dataLong;
      console.log(card)

      

      let listLong = document.querySelector('#cardLarge')

        listLong.innerHTML =
        listLong.innerHTML +

     `
     
     <div class="col"><a href="${card.link}">
          <div id="cardLong">
  
              <img id="imgLong" src="${card.artist.picture}" alt="Card_image">
              <div>
                  <h5 id="titleLong">${card.title}</h5>
              </div>
              <i id="pulsantelong" onclick='playMusic("${card.preview}", "${card.title}", "${card.artist.name}")' class="bi play mx-2 fs-3 bi-play-circle-fill"></i>

          </div>
      </a>
      </div>
      `

    } else {
      console.log('Qualcosa è andato storto')
    }
  } catch (error) {
    console.log(error)
  }
}

cardLarge()

const cardLarge1 = async function () {
  try {
    let res = await fetch(' https://striveschool-api.herokuapp.com/api/deezer/album/300062')
    console.log(res)
    if (res.ok) {
      let dataLong = await res.json()
      console.log('datacard', dataLong)
      let card=dataLong;
      console.log(card)

      

      let listLong = document.querySelector('#cardLarge1')

        listLong.innerHTML =
        listLong.innerHTML +

     `
     
     <div class="col"><a href="${card.link}">
          <div id="cardLong">
  
              <img id="imgLong" src="${card.artist.picture}" alt="Card_image">
              <div>
                  <h5 id="titleLong">${card.title}</h5>
                  </div>
                  <i id="pulsantelong" onclick='playMusic("${card.preview}", "${card.title}", "${card.artist.name}")' class="bi play mx-2 fs-3 bi-play-circle-fill"></i>

          </div>
      </a>
      </div>
      `

    } else {
      console.log('Qualcosa è andato storto')
    }
  } catch (error) {
    console.log(error)
  }
}

cardLarge1()


const cardLarge2 = async function () {
  try {
    let res = await fetch(' https://striveschool-api.herokuapp.com/api/deezer/album/662259')
    console.log(res)
    if (res.ok) {
      let dataLong = await res.json()
      console.log('datacard', dataLong)
      let card=dataLong;
      console.log(card)

      

      let listLong = document.querySelector('#cardLarge2')

        listLong.innerHTML =
        listLong.innerHTML +

     `
     
     <div class="col"><a href="${card.link}">
          <div id="cardLong">
  
              <img id="imgLong" src="${card.artist.picture}" alt="Card_image">
              <div>
                  <h5 id="titleLong">${card.title}</h5>
                  </div>
                  <i id="pulsantelong" onclick='playMusic("${card.preview}", "${card.title}", "${card.artist.name}")' class="bi play mx-2 fs-3 bi-play-circle-fill"></i>

          </div>
      </a>
      </div>
      `

    } else {
      console.log('Qualcosa è andato storto')
    }
  } catch (error) {
    console.log(error)
  }
}

cardLarge2()


const cardLarge3 = async function () {
  try {
    let res = await fetch(' https://striveschool-api.herokuapp.com/api/deezer/album/108706862')
    console.log(res)
    if (res.ok) {
      let dataLong = await res.json()
      console.log('datacard', dataLong)
      let card=dataLong;
      console.log(card)

      

      let listLong = document.querySelector('#cardLarge3')

        listLong.innerHTML =
        listLong.innerHTML +

     `
     
     <div class="col"><a href="${card.link}">
          <div id="cardLong">
  
              <img id="imgLong" src="${card.artist.picture}" alt="Card_image">
              <div>
                  <h5 id="titleLong">${card.title}</h5>
                  </div>
                  <i id="pulsantelong" onclick='playMusic("${card.preview}", "${card.title}", "${card.artist.name}")' class="bi play mx-2 fs-3 bi-play-circle-fill"></i>

          </div>
      </a>
      </div>
      `

    } else {
      console.log('Qualcosa è andato storto')
    }
  } catch (error) {
    console.log(error)
  }
}

cardLarge3()
const cardLarge4 = async function () {
  try {
    let res = await fetch(' https://striveschool-api.herokuapp.com/api/deezer/album/258963')
    console.log(res)
    if (res.ok) {
      let dataLong = await res.json()
      console.log('datacard', dataLong)
      let card=dataLong;
      console.log(card)

      

      let listLong = document.querySelector('#cardLarge4')

        listLong.innerHTML =
        listLong.innerHTML +

     `
     
     <div class="col"><a href="${card.link}">
          <div id="cardLong">
  
              <img id="imgLong" src="${card.artist.picture}" alt="Card_image">
              <div>
                  <h5 id="titleLong">${card.title}</h5>
                  </div>
                  <i id="pulsantelong" onclick='playMusic("${card.preview}", "${card.title}", "${card.artist.name}")' class="bi play mx-2 fs-3 bi-play-circle-fill"></i>

          </div>
      </a>
      </div>
      `

    } else {
      console.log('Qualcosa è andato storto')
    }
  } catch (error) {
    console.log(error)
  }
}

cardLarge4()
const cardLarge5 = async function () {
  try {
    let res = await fetch(' https://striveschool-api.herokuapp.com/api/deezer/album/108563')
    console.log(res)
    if (res.ok) {
      let dataLong = await res.json()
      console.log('datacard', dataLong)
      let card=dataLong;
      console.log(card)

      

      let listLong = document.querySelector('#cardLarge5')

        listLong.innerHTML =
        listLong.innerHTML +

     `
     
     <div class="col"><a href="${card.link}">
          <div id="cardLong">
  
              <img id="imgLong" src="${card.artist.picture}" alt="Card_image">
              <div>
                  <h5 id="titleLong">${card.title}</h5>
                  </div>
                  <i id="pulsantelong" onclick='playMusic("${card.preview}", "${card.title}", "${card.artist.name}")' class="bi play mx-2 fs-3 bi-play-circle-fill"></i>

          </div>
      </a>
      </div>
      `

    } else {
      console.log('Qualcosa è andato storto')
    }
  } catch (error) {
    console.log(error)
  }
}

cardLarge5()

const cardHi = async function () {
  try {
    let res = await fetch(' https://striveschool-api.herokuapp.com/api/deezer/album/155994342')
    console.log(res)
    if (res.ok) {
      let dataLong = await res.json()
      console.log('datacard', dataLong)
      let card=dataLong;
      console.log(card)

      

      let listLong = document.querySelector('#cardHi')

        listLong.innerHTML =
        listLong.innerHTML +

     `
     
     <div class="col"><a href="${card.link}">
          <div id="cardTall">
  
              <img id="imgTall" src="${card.artist.picture}" alt="Card_image">
              <div>
                  <h5 id="titleTall">${card.title}</h5>
              </div>
              <i id="pulsantehi" onclick='playMusic("${card.preview}", "${card.title}", "${card.artist.name}")' class="bi play mx-2 fs-3 bi-play-circle-fill"></i>

          </div>
      </a>
      </div>
      `

    } else {
      console.log('Qualcosa è andato storto')
    }
  } catch (error) {
    console.log(error)
  }
}

cardHi()
const cardHi1 = async function () {
  try {
    let res = await fetch(' https://striveschool-api.herokuapp.com/api/deezer/album/721846')
    console.log(res)
    if (res.ok) {
      let dataLong = await res.json()
      console.log('datacard', dataLong)
      let card=dataLong;
      console.log(card)

      

      let listLong = document.querySelector('#cardHi1')

        listLong.innerHTML =
        listLong.innerHTML +

     `
     
     <div class="col"><a href="${card.link}">
          <div id="cardTall">
  
              <img id="imgTall" src="${card.artist.picture}" alt="Card_image">
              <div>
                  <h5 id="titleTall">${card.title}</h5>
              </div>
              <i id="pulsantehi" onclick='playMusic("${card.preview}", "${card.title}", "${card.artist.name}")' class="bi play mx-2 fs-3 bi-play-circle-fill"></i>

          </div>
      </a>
      </div>
      `

    } else {
      console.log('Qualcosa è andato storto')
    }
  } catch (error) {
    console.log(error)
  }
}

cardHi1()
const cardHi2 = async function () {
  try {
    let res = await fetch(' https://striveschool-api.herokuapp.com/api/deezer/album/126328')
    console.log(res)
    if (res.ok) {
      let dataLong = await res.json()
      console.log('datacard', dataLong)
      let card=dataLong;
      console.log(card)

      

      let listLong = document.querySelector('#cardHi2')

        listLong.innerHTML =
        listLong.innerHTML +

     `
     
     <div class="col"><a href="${card.link}">
          <div id="cardTall">
  
              <img id="imgTall" src="${card.artist.picture}" alt="Card_image">
              <div>
                  <h5 id="titleTall">${card.title}</h5>
              </div>
              <i id="pulsantehi" onclick='playMusic("${card.preview}", "${card.title}", "${card.artist.name}")' class="bi play mx-2 fs-3 bi-play-circle-fill"></i>


          </div>
      </a>
      </div>
      `

    } else {
      console.log('Qualcosa è andato storto')
    }
  } catch (error) {
    console.log(error)
  }
}

cardHi2()
const cardHi3 = async function () {
  try {
    let res = await fetch(' https://striveschool-api.herokuapp.com/api/deezer/album/10304782')
    console.log(res)
    if (res.ok) {
      let dataLong = await res.json()
      console.log('datacard', dataLong)
      let card=dataLong;
      console.log(card)

      

      let listLong = document.querySelector('#cardHi3')

        listLong.innerHTML =
        listLong.innerHTML +

     `
     
     <div class="col"><a href="${card.link}">
          <div id="cardTall">
  
              <img id="imgTall" src="${card.artist.picture}" alt="Card_image">
              <div>
                  <h5 id="titleTall">${card.title}</h5>
              </div>
              <i id="pulsantehi" onclick='playMusic("${card.preview}", "${card.title}", "${card.artist.name}")' class="bi play mx-2 fs-3 bi-play-circle-fill"></i>


          </div>
      </a>
      </div>
      `

    } else {
      console.log('Qualcosa è andato storto')
    }
  } catch (error) {
    console.log(error)
  }
}

cardHi3()
const cardHi4 = async function () {
  try {
    let res = await fetch(' https://striveschool-api.herokuapp.com/api/deezer/album/247385')
    console.log(res)
    if (res.ok) {
      let dataLong = await res.json()
      console.log('datacard', dataLong)
      let card=dataLong;
      console.log(card)

      

      let listLong = document.querySelector('#cardHi4')

        listLong.innerHTML =
        listLong.innerHTML +

     `
     
     <div class="col"><a href="${card.link}">
          <div id="cardTall">
  
              <img id="imgTall" src="${card.artist.picture}" alt="Card_image">
              <div>
                  <h5 id="titleTall">${card.title}</h5>
              </div>
              <i id="pulsantehi" onclick='playMusic("${card.preview}", "${card.title}", "${card.artist.name}")' class="bi play mx-2 fs-3 bi-play-circle-fill"></i>


          </div>
      </a>
      </div>
      `

    } else {
      console.log('Qualcosa è andato storto')
    }
  } catch (error) {
    console.log(error)
  }
}

cardHi4()


function bringToArtistPage(artist, id) {
  let infoArr = [artist, id]
  location.href = "./artist.html"
  localStorage.setItem("artistValue", JSON.stringify(infoArr))
}

function bringToAlbumPage(album, id) {
  let albumArr = [album, id]
  location.href = "./albumpage.html"
  localStorage.setItem("albumeValue", JSON.stringify(albumArr))
}


let audio = new Audio()

function playMusic(song, title, artist) {
  document.querySelector(".SongTitle").innerText = title
  document.querySelector(".ArtistName").innerText = artist
  let m = song
  audio.src = m;
  audio.play();
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
}

let liked = document.querySelector(".liked")
let like = document.querySelector(".like")

let playing = document.querySelector(".play")
let paused = document.querySelector(".pause")


playing.onclick = () => {
  audio.play()
}
paused.onclick = () => {
  audio.pause()
}

audio.onpause= () => {
  playing.style.display = 'block'
  paused.style.display = 'none';
};

audio.onplay = () => {
  playing.style.display = 'none'
  paused.style.display = 'block';
};

let rep = document.querySelector(".repeat")
let rep1 = document.querySelector(".repeat1")

rep.onclick = () => {
    rep.style.display = 'none'
    rep1.style.display = 'block'
    rep1.style.color = 'green'
    audio.loop = false
}

function enableLoop() { 
  audio.loop = true;
} 

rep1.onclick = () => {
    enableLoop()
    rep.style.display = 'block'
    rep1.style.display = 'none'
}




// The mousemove event is fired at an element when a pointing device (usually a mouse) is moved while the cursor's hotspot is inside it.
//Mousedown is fired while the button is initially pressed, mouseup is fired when the button is released.


const volume = document.querySelector('.volume');
const volumeRange = document.querySelector('.volume-range');
const volumeContainer = document.querySelector('.volume-container');
const volumeBtn = document.querySelector('.volume-button');
const volumeRangeWidth = volumeRange.getBoundingClientRect().width;

const player = document.querySelector('.player');
const playerRange = document.querySelector('.player-range');
const playerContainer = document.querySelector('.player-container');
const playerBtn = document.querySelector('.player-button');
const playerRangeWidth = playerRange.getBoundingClientRect().width;


volumeContainer.addEventListener("mouseup", up);
volumeContainer.addEventListener("mousedown", downOnVolume);
volumeContainer.addEventListener("mousedown", volumeSlide);
volumeContainer.addEventListener("mousemove", volumeSlide);

playerContainer.addEventListener("mouseup", up);
playerContainer.addEventListener("mousedown", downOnPlayer);
playerContainer.addEventListener("mousedown", playerSlide);
playerContainer.addEventListener("mousemove", playerSlide);


let mouseIsDownOnPlayer = false;
let mouseIsDownOnVolume = false

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
  let timer = minutes + ":" + seconds
  return timer
}


