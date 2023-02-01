let num = "123456"
let completeNum = ""
let finalNum = ""
counter = 0
const numWithDots = () => {
    for(let i=num.length-1; i>=0; i--){
        console.log(i)
        if(counter === 3){
            completeNum += "."
            counter = 1
        } else {
            counter++
        }
        completeNum += num[i]
    }
    console.log(completeNum)
    for(i=completeNum.length-1; i>=0; i--){
        finalNum += completeNum[i]
    }
    return console.log(finalNum)
}
numWithDots()