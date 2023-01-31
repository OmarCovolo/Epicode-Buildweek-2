let gigi = "https://cdns-preview-7.dzcdn.net/stream/c-704c1595f88a2ba22598d1e24c53d8b7-5.mp3"
let audio = new Audio(gigi) 
let liked = document.querySelector(".liked")
let like = document.querySelector(".like")
like.onclick = () => {
    like.style.display = 'none'
    liked.style.display = 'block'
}
liked.onclick = () => {
    like.style.display = 'block'
    liked.style.display = 'none'
}
let playing = document.querySelector(".play")
let paused = document.querySelector(".pause")
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
    rep1.style.color = 'green'
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
audio.addEventListener("loadedmetadata", () => {
  document.querySelector(".totalDuration").innerHTML = `${updateTime(audio.duration)}`;
  maxVolume = audio.volume = 1
  // minVolume = (audio.volume = 0)
  // if (mouseIsDown === true) {
  //   let v = (volume.offsetWidth/volumeRange.offsetWidth) * (maxVolume +2)
  //   return 
  // }
  setInterval(() => {
    if (volume.offsetWidth > (volumeRange.offsetWidth*50)/100 && volume.offsetWidth !== 0){
      document.querySelector('.bi-volume-up').style.display = "block"
      document.querySelector('.bi-volume-down').style.display = "none"
      document.querySelector('.bi-volume-mute').style.display = "none"
    } else {              
      document.querySelector('.bi-volume-up').style.display = "none"
      document.querySelector('.bi-volume-down').style.display = "block"
      document.querySelector('.bi-volume-mute').style.display = "none"}
    if (volume.offsetWidth === 0){
      document.querySelector('.bi-volume-mute').style.display = "block"
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
function updateTime (time) {
  const seconds = String(Math.floor(time % 60) || 0).padStart("2", "0");
  const minutes = String(Math.floor(time / 60) || 0).padStart('0');
  let timer = minutes + "" + seconds
  return timer
}
