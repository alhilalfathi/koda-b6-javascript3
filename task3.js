const dataSet = ["joni","jane","john","mikael","mikaya","Mamika","joko"]

// const keyword = "mika"
let textLow = ""
let arr = []

// function lowerCase(text){
//     textLow = text.toLowerCase()
//     return textLow
// }

function searchName(keyword, cb){
textLow = keyword.toLowerCase()
    for(i=0; i<dataSet.length; i++){
        if(dataSet[i].includes(textLow)){
            // console.log("ada")
            arr.push(dataSet[i])
        }else {
            // console.log("ga ada")
        }
    }
    cb()
}
function display(){
    console.log(arr)
    console.log(arr.length)
}
searchName("Jo", display)


// console.log(lowerCase("MiK"))
// console.log(toLow)