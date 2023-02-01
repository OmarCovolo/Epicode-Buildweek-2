
//PLAYLIST CREATION
for(let i=0; i<20; i++){
    let bottomAside = document.querySelector(".bottom-left-aside")
    let div = document.createElement("div")
    div.innerHTML = "Playlist n." + i
    div.style.color = "#b5b2b2"
    div.style.margin = "1rem 0"
    div.classList.add("playlist")
    bottomAside.appendChild(div)
}


// const setWhite = (event) => {
//      if(event.target.className = "searchLi") {
//          let a = document.getElementById("search")
//          a.style.color = "white"
//      } else if (event.target.className = "libraryLi"){
//          let a = document.getElementById("library")
//          a.style.color = "white"
//      }
//  }

// const comeBackGray = (event) =>{
//     if(event.target.className = "searchLi") {
//         let a = document.getElementById("search")
//         a.style.color = "#b5b2b2"
//     } else if (event.target.className = "libraryLi"){
//         let a = document.getElementById("library")
//         a.style.color = "#b5b2b2"
//     }
// }

// COLOR WHITE SEARCH ONMOUSEOVER
  const setWhite = (event) => {
    let a = document.getElementById("search")
    a.classList.add("whiteA")
 }

  const comeBackGray = (event) => {
    let a = document.getElementById("search")
    a.classList.remove("whiteA")

 }


  const setWhite2 = (event) => {
    let a = document.getElementById("library")
    a.classList.add("whiteA")
 }

  const comeBackGray2 = (event) => {
    let a = document.getElementById("library")
     a.classList.remove("whiteA")
 }

