const data = [
    {
        name: "Koda",
        wait: 5,
    },
    {
        name: "Jono",
        wait: 3,
    },
    {
        name: "Joko",
        wait: 2,
    },
    {
        name: "Budi",
        wait: 4,
    },
    {
        name: "Abi",
        wait: 1,
    }
]


 function queue (data){
 let index = 0
    function start(){
        return new Promise((resolve, reject) => {
            const person = data[index]
            if(person){
                console.log("Menunggu antrian...")
                setTimeout(function(){
                    console.log(`Pesanan ${person.name} sudah siap`)
                    index += 1
                    resolve(start())
                }, person.wait*1000)
            }else {
                reject()
            }
        })
    }
    return start()
 }

queue(data).then().catch(()=>{console.log("Antrian selesai")})
