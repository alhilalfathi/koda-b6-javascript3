const url = "https://jsonplaceholder.typicode.com/users"

fetch(url).then(obj=> obj.json().then(data => {
    let email = []
    // console.log(data)
    data.forEach(
        user => {email.push(toLowerManual(user.email))}
     )
    console.log(email)
    
}))


const lowerCaseMap = {
    A: "a",
    B: "b",
    C: "c",
    D: "d",
    F: "f",
    G: "g",
    H: "h",
    I: "i",
    J: "j",
    K: "k",
    L: "l",
    N: "n",
    O: "o",
    P: "p",
    Q: "q",
    R: "r",
    S: "s",
    T: "t",
    U: "u",
    V: "v",
    W: "w",
    X: "x",
    Y: "y",
    Z: "z"
}
function toLowerManual(str) {
  let hasil = ""
  for (let i=0; i<str.length; i++) {
    if (lowerCaseMap[str[i]]) {
      hasil += lowerCaseMap[str[i]]
    } else {
      hasil += str[i]
    }
  }
  return hasil
}