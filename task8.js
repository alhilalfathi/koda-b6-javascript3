const url = "https://jsonplaceholder.typicode.com/users"

fetch(url).then(obj=> obj.json().then(data => {
    let email = []
    // console.log(data)
    data.forEach(
        user => {email.push(toLowerManual(user.email))}
     )
    console.log(email)
    
}))

async function getData(url) {
  let emailb = []
    try {
        let res = await fetch(url)
        let hasilRes = await res.json()
        // console.log(hasilRes)
        hasilRes.forEach(
        user => {emailb.push(toLowerManual(user.email))}
        )
        console.log("hasil dari async await")
        console.log(emailb)
    }

    catch(err) {
      console.log(err)
    }
}

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
getData(url)