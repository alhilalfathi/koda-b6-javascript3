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
    },
    {
        name: "",
        wait: 2,
    },
    {
        name: "Messi",
        wait: 2,
    }
]


 function queue (data){
 let index = 0
    function start(){
        return new Promise((resolve, reject) => {
            const person = data[index]
            if(person){
                if(person.name !== ""){
                console.log("Menunggu antrian...")
                setTimeout(function(){
                    console.log(`Pesanan ${person.name} sudah siap`)
                    index += 1
                    resolve(start())
                }, person.wait*1000)
                }else{
                setTimeout(function(){
                    console.log("Nama Kosong")
                    index += 1
                    resolve(start())
                }, person.wait*1000)
                }
            }else {
                reject()
            }

        })
    }
    return start()
 }

queue(data).then().catch(()=>{console.log("Antrian selesai")})
