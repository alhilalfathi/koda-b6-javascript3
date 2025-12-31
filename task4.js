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

console.log("Menunggu antrian")

function tunggu(nm, wk){
    setTimeout(() => console.log(`Halo ${nm} pesanan kamu sudah selesai`)
        ,wk * 1000)
}

function id(dt, tunggu){
    let nama = ""
    let waktu = 0
    for(i=0; i<dt.length; i++){
        // console.log(dt[i])
        nama = dt[i].name
        waktu = dt[i].wait
        // console.log(nama)
        // console.log(waktu)
        tunggu(nama,waktu)
    }
    
} 
id(data,tunggu)