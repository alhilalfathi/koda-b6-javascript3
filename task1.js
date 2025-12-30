const array = [1, 2, "a", "1a"];
console.log(array.toString());

let num = 0
let x = ""
for(i=0; i<array.length; i++){
     num = String(array[i])
     x += num
}
console.log(x)
