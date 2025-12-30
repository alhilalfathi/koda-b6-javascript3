// Built-in Method
// 1. concat() : digunakan untuk menggabungkan beberapa array
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);
console.log(array3);

// 2. Array.isArray : digunakan untuk melihat apakah suatu nilai atau variabel merupakan array
console.log(Array.isArray([1, 3, 5]));

// 3. every() : digunakan untuk menguji apakah semua elemen dalam array memenuhi kondisi tertentu dan akan mengembalikan nilai true atau false
const ages = [32, 33, 16, 40];
function checkAge(age) {
  return age > 18;
}
console.log(ages.every(checkAge))

// 4. toString() : digunakan untuk mengubah array menjadi ke bentuk string
const array = [1, 2, "a", "1a"];
console.log(array.toString());

// 5. fromCharCode() : digunakan untuk mengubah unicode menjadi sebuah karakter string
let char = String.fromCharCode(65);
console.log(char)

// 6. includes() : digunakan untuk melakukan pencarian case-sensitive terhadap suatu string dan akan mengembalikan nilai true atau false
let text = "Hallo Koda Academy";
let result = text.includes("Koda");

// 7. split() : digunakan untuk memisahkan string berdasarkan pemisah yang ditentukan
let a = "Hallo Bootcamp Koda"
const myArray = a.split(" ");

// 8. slice() : digunakan untuk mengekstrak suatu string menjadi string baru tanpa mengubah string aslinya
const str = "Selamat pagi Bootcamp Koda";
console.log(str.slice(12));

// 9. replace() : digunakan untuk mengubah suatu string dengan mengganti suatu kata dalam string, mengembalikan string baru sehingga tidak mengubah string aslinya
let b = "Hallo Koda";
let bResult = b.replace("Koda", "Kodi");

// 10. toLowerCase() : digunakan untuk mengubah string menjadi huruf kecil
const sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.toLowerCase());

// 11. toUpperCase() : digunakan untuk mengubah string menjadi huruf besar
const sentence1 = "The quick brown fox jumps over the lazy dog.";
console.log(sentence1.toUpperCase());

// 12. trim() : digunakan untuk menghapus string kosong dibagian depan dan belakang sebuah string dan mengembalikan string baru tanpa mengubah string aslinya
const greeting = "   Hello world!   ";
console.log(greeting.trim());

// 13. trimEnd() atau trimRight() : digunakan sama seperti trim() namun hanya menghilangkan string kosong pada bagian belakang sebuah string
 console.log(greeting.trimEnd());

// 14. trimStart() atau trimLeft() : digunakan untuk menghapus string kosong pada bagian depan sebuah string
 console.log(greeting.trimStart());

// 15. pop() : digunakan untuk menghapus data terakhir array
let apelPisang = ["apel", "pisang"];
apelPisang.pop();
console.log(apelPisang);

// 16. charAt() : digunakan untuk mengambil karakter berdasarkan index pada string
let kata = "Halo";
console.log(kata.charAt(1));

// 17. from() : method array yang digunakan untuk membuat array dari objek iterable apapun
 let r = "ABCDEFG";
Array.from(r);

// 18. join() : menggabungkan array menjadi string tanpa mengubah array asli
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let l = fruits.join(" and ");

// 19. push() : menambahkan element ke dalam array dan mengembalikan panjang array baru 
const buah = ["Banana", "Orange", "Apple", "Mango"];
buah.push("Kiwi", "Lemon");

// 20. shift() : menghapus element awal pada array sehingga mengubah panjang array
const fr = ["Banana", "Orange", "Apple", "Mango"];
fr.shift();

// built-in function
// 1. parseInt() : digunakan untuk parsing data argumen dan mengembalikan nilai integer
 let s = parseInt("10");
console.log(s)

// 2. parseFloat() : digunakan untuk parsing argumen dan mengembalikan nilai float
 let n = parseFloat("10.4");
 console.log(n)

// 3. isNan() : digunakan untuk mengecek apakah suatu variabel bukan number
console.log(isNaN("koda"));

// 4. setTimeout() : digunakan untuk menjalankan fungsi setelah waktu tertentu
setTimeout(() => {
  console.log("Tampil setelah 2 detik");
  }, 2000);
  
// 5. console.log() : digunakan untuk memunculkan output ke console atau terminal
console.log("Koda Academy")