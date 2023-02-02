window.localStorage.getItem("albumeValue");
let getAlbum = localStorage.getItem("albumeValue")
let albumID = JSON.parse(getAlbum)
console.log(albumID);

const takeAlbum = async function(id) {
    try{
        let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/album/' + id)
        console.log(response)
        if(response.ok){
            let data = await response.json()
            console.log(data)
            //CREAZIONE ALBUM HEADER
            let albumCover = document.getElementById("albumCover")
            albumCover.src= data.cover
            let spanType = document.getElementById("recordType")
            spanType.innerText = data.record_type.toUpperCase()
            let h1 = document.querySelector("h1")
            h1.innerText = data.title
            let description = document.getElementById("description")
            description.innerHTML = `
                <img id="artistImage" src=${data.contributors[0].picture_small}> <span class="contributors">${data.artist.name}</span> &middot ${data.release_date.slice(0,4)} &middot ${data.nb_tracks} brani, <span id="duration"></span>`
                let duration = data.duration/60
                console.log(data.duration)
                let spanDuration = document.getElementById("duration")
                if(duration >= 60) {
                    
                    let hour = Math.floor(duration/60)
                    let min = Math.floor(duration - (hour * 60))
                    
                    
                    
                    if(hour === 1){
                        spanDuration.innerText = hour + " ora " + min + " min"
                    } else if(hour > 1){
                        spanDuration.innerText = hour + " ore " + min + " min"
                    }
                    
                } else {
                    let sec = String(duration).slice(3,5)
                    if(sec > 60){
                        sec = sec-60
                        duration ++
                    }
                    spanDuration.innerText = " " + Math.floor(duration) + " min " + sec + " sec."
                }
                
            
            //CREAZIONE CANZONI MAIN
            console.log(data.tracks)
           
            for(let i=0; i<data.tracks.data.length; i++){
                    let num = String(data.tracks.data[i].rank)
                    console.log(num)
                    let completeNum = ""
                    let finalNum = ""
                    counter = 0
                    
                        for(let j=num.length-1; j>=0; j--){
                            if(counter === 3){
                                completeNum += "."
                                counter = 1
                            } else {
                                counter++
                            }
                            completeNum += num[j]
                        }
                        for(let z=completeNum.length-1; z>=0; z--){
                            finalNum += completeNum[z]
                        }
                        console.log(finalNum)
                let table = document.getElementById("songTable")
                let songDuration = data.tracks.data[i].duration
                if(songDuration<60){
                    songDuration = "0:" + songDuration
                } else if(songDuration>=60){
                    songDuration = Math.floor(songDuration/60)
                    let sec = data.tracks.data[i].duration - songDuration*60
                    if(sec<10){
                        songDuration = songDuration + ":0" + sec
                    }else{
                        songDuration = songDuration + ":" + sec
                    }
                    
                }
                table.innerHTML += `
                    <div class="row tableRow">
                        <div class="col col-1 text-end"><span>${i+1}</span></div>
                            <div class="col col-4"><span>${data.tracks.data[i].title}</span><br />
                            <span>${data.tracks.data[i].artist.name}</span>
                        </div>
                        <div class="col col-4 text-end"><span>${finalNum}</span></div>
                        <div class="col col-3 text-center"><span>${songDuration}</span></div>
                    </div> `
                
                    
            }
            

        }
    } catch(error){
        console.log("E' presente un errore di tipo: ", error)
    }
}

takeAlbum(albumID[1])


// SCROLL ANIMATIONS

let headerHeight = document.querySelector(".albumHeader").offsetHeight - document.querySelector("nav").offsetHeight
let nav = document.querySelector("nav")

window.onscroll = () => {
    if(window.scrollY > headerHeight) {
        nav.style.backgroundColor = "white"
        nav.style.transition = "1s"

    } else {
        nav.style.backgroundColor = "#ffc017"
        nav.style.transition = "1s"
        
    }
}



