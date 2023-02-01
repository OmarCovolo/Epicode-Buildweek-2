const cardLong = async function () {
  try {
    let res = await fetch(' https://striveschool-api.herokuapp.com/api/deezer/album/75621062')
    console.log(res)
    if (res.ok) {
      let dataLong = await res.json()
      console.log('datacard', dataLong)
      let card=dataLong;
      console.log(card)

      

      let listLong = document.querySelector('#listLong')

        listLong.innerHTML =
        listLong.innerHTML +

     `<div class="col"><a href="${card.link}">
          <div id="cardLong">
  
              <img src="${card.artist.picture}" alt="Card_image">
              <div>
                  <h5>${card.title}</h5>
              </div>
              <i id="pulsanteLong" class="bi pause mx-2 fs-3 bi-pause-circle-fill"></i>
  <i id="pulsanteLong" class="bi play mx-2 fs-3 bi-play-circle-fill"></i>
          </div>
      </a>
      </div>`

    } else {
      console.log('Qualcosa è andato storto')
    }
  } catch (error) {
    console.log(error)
  }
}

cardLong()









const cardLong1 = async function () {
  try {
    let res = await fetch(' https://striveschool-api.herokuapp.com/api/deezer/album/75621062')
    console.log(res)
    if (res.ok) {
      let dataLong = await res.json()
      console.log('datacard', dataLong)
      let card=dataLong;
      console.log(card)

      

      let listLong = document.querySelector('#listLong')

        listLong.innerHTML =
        listLong.innerHTML +

     `<div class="col"><a href="${card.link}">
          <div id="cardLong">
  
              <img src="${card.artist.picture}" alt="Card_image">
              <div>
                  <h5>${card.title}</h5>
              </div>
              <i id="pulsanteLong" class="bi pause mx-2 fs-3 bi-pause-circle-fill"></i>
  <i id="pulsanteLong" class="bi play mx-2 fs-3 bi-play-circle-fill"></i>
          </div>
      </a>
      </div>`

    } else {
      console.log('Qualcosa è andato storto')
    }
  } catch (error) {
    console.log(error)
  }
}

cardLong1()
const cardLong2 = async function () {
  try {
    let res = await fetch(' https://striveschool-api.herokuapp.com/api/deezer/album/75621062')
    console.log(res)
    if (res.ok) {
      let dataLong = await res.json()
      console.log('datacard', dataLong)
      let card=dataLong;
      console.log(card)

      

      let listLong = document.querySelector('#listLong')

        listLong.innerHTML =
        listLong.innerHTML +

     `<div class="col"><a href="${card.link}">
          <div id="cardLong">
  
              <img src="${card.artist.picture}" alt="Card_image">
              <div>
                  <h5>${card.title}</h5>
              </div>
              <i id="pulsanteLong" class="bi pause mx-2 fs-3 bi-pause-circle-fill"></i>
  <i id="pulsanteLong" class="bi play mx-2 fs-3 bi-play-circle-fill"></i>
          </div>
      </a>
      </div>`

    } else {
      console.log('Qualcosa è andato storto')
    }
  } catch (error) {
    console.log(error)
  }
}

cardLong2()
const cardLong4 = async function () {
  try {
    let res = await fetch(' https://striveschool-api.herokuapp.com/api/deezer/album/75621062')
    console.log(res)
    if (res.ok) {
      let dataLong = await res.json()
      console.log('datacard', dataLong)
      let card=dataLong;
      console.log(card)

      

      let listLong = document.querySelector('#listLong')

        listLong.innerHTML =
        listLong.innerHTML +

     `<div class="col"><a href="${card.link}">
          <div id="cardLong">
  
              <img src="${card.artist.picture}" alt="Card_image">
              <div>
                  <h5>${card.title}</h5>
              </div>
              <i id="pulsanteLong" class="bi pause mx-2 fs-3 bi-pause-circle-fill"></i>
  <i id="pulsanteLong" class="bi play mx-2 fs-3 bi-play-circle-fill"></i>
          </div>
      </a>
      </div>`

    } else {
      console.log('Qualcosa è andato storto')
    }
  } catch (error) {
    console.log(error)
  }
}

cardLong4()






  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  const cardAlbum = async function () {
    try {
      let res = await fetch(' https://striveschool-api.herokuapp.com/api/deezer/album/75621062')
      console.log(res)
      if (res.ok) {
        let dataCard = await res.json()
        console.log('datacard', dataCard)
        let card=dataCard;
        console.log(card)

        
  
        let listCard = document.querySelector('#listcards')

          listCard.innerHTML =
          listCard.innerHTML +

       `<div class="col"><a href="${card.link}">
            <div id="card">
    
                <img src="${card.artist.picture}" alt="Card_image">
                <div>
                    <h5>${card.title}</h5>
                    <p>${card.artist.name}</p>
                </div>
                <i id="pulsante" class="bi pause mx-2 fs-3 bi-pause-circle-fill"></i>
    <i id="pulsante" class="bi play mx-2 fs-3 bi-play-circle-fill"></i>
            </div>
        </a>
        </div>`

      } else {
        console.log('Qualcosa è andato storto')
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  cardAlbum()

  const cardAlbum1 = async function () {
    try {
      let res = await fetch(' https://striveschool-api.herokuapp.com/api/deezer/album/75621062')
      console.log(res)
      if (res.ok) {
        let dataCard = await res.json()
        console.log('datacard', dataCard)
        let card=dataCard;
        console.log(card)

        
  
        let listCard = document.querySelector('#listcards')

          listCard.innerHTML =
          listCard.innerHTML +

       `<div class="col"><a href="${card.link}">
            <div id="card">
    
                <img src="${card.artist.picture}" alt="Card_image">
                <div>
                    <h5>${card.title}</h5>
                    <p>${card.artist.name}</p>
                </div>
                <i id="pulsante" class="bi pause mx-2 fs-3 bi-pause-circle-fill"></i>
    <i id="pulsante" class="bi play mx-2 fs-3 bi-play-circle-fill"></i>
            </div>
        </a>
        </div>`

      } else {
        console.log('Qualcosa è andato storto')
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  cardAlbum1()



  const cardAlbum2 = async function () {
    try {
      let res = await fetch(' https://striveschool-api.herokuapp.com/api/deezer/album/75621062')
      console.log(res)
      if (res.ok) {
        let dataCard = await res.json()
        console.log('datacard', dataCard)
        let card=dataCard;
        console.log(card)

        
  
        let listCard = document.querySelector('#listcards')

          listCard.innerHTML =
          listCard.innerHTML +

       `<div class="col"><a href="${card.link}">
            <div id="card">
    
                <img src="${card.artist.picture}" alt="Card_image">
                <div>
                    <h5>${card.title}</h5>
                    <p>${card.artist.name}</p>
                </div>
                <i id="pulsante" class="bi pause mx-2 fs-3 bi-pause-circle-fill"></i>
    <i id="pulsante" class="bi play mx-2 fs-3 bi-play-circle-fill"></i>
            </div>
        </a>
        </div>`

      } else {
        console.log('Qualcosa è andato storto')
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  cardAlbum2()



  const cardAlbum3 = async function () {
    try {
      let res = await fetch(' https://striveschool-api.herokuapp.com/api/deezer/album/75621062')
      console.log(res)
      if (res.ok) {
        let dataCard = await res.json()
        console.log('datacard', dataCard)
        let card=dataCard;
        console.log(card)

        
  
        let listCard = document.querySelector('#listcards')

          listCard.innerHTML =
          listCard.innerHTML +

       `<div class="col"><a href="${card.link}">
            <div id="card">
    
                <img src="${card.artist.picture}" alt="Card_image">
                <div>
                    <h5>${card.title}</h5>
                    <p>${card.artist.name}</p>
                </div>
                <i id="pulsante" class="bi pause mx-2 fs-3 bi-pause-circle-fill"></i>
    <i id="pulsante" class="bi play mx-2 fs-3 bi-play-circle-fill"></i>
            </div>
        </a>
        </div>`

      } else {
        console.log('Qualcosa è andato storto')
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  cardAlbum3()



  

  
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

