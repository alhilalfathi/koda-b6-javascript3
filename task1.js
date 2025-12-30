const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);

const array4 = [
    ...array1,
    ...array2
] 
console.log(array4);