const data = [
    {
        name: "John",
        wait: 1500,
    },
    {
        name: "Ed",
        wait: 2000,
    },
    {
        name: "Jane",
        wait: 500,
    }
]
 function queue (dt){
    let id = 0
    function mulai(){
        return new Promise((resolve, reject) => {
        const person = dt[id]
        if(person){
            // console.log(`${person.name}`)
            setTimeout(()=>{
                console.log(person.name)
                id += 1
                resolve(mulai())
            }, person.wait)
        } else {
            reject()
        }
    })
    }
    return mulai()
 }
queue(data).then().catch(()=>{console.log("Antrian selesai")})