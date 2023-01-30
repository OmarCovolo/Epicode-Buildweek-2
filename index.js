
  const cardAlbum = async function () {
    try {
      let res = await fetch(' https://striveschool-api.herokuapp.com/api/deezer/album/75621062')
      console.log(res)
      if (res.ok) {
        let dataCard = await res.json()
        console.log('datacard', dataCard)
        let card=dataCard;
        console.log(card)

        
  
        let listCard = document.querySelector('.listcards')

          listCard.innerHTML =
          listCard.innerHTML +

       `<a href="${card.link}">
            <div id="card">
    
                <img src="${card.artist.picture}" alt="Card_image">
                <div>
                    <h5>${card.title}</h5>
                    <p>${card.artist.name}</p>
                </div>
            </div>
        </a>`

      } else {
        console.log('Qualcosa è andato storto')
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  cardAlbum()


