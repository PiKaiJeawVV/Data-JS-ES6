//Destructuring  แยกข้อมูลใน Array

//Array
const colors = ['แดง','ดำ','ทอง','ฟ้า','เขียว']  // <--
const [a,b,c,d,e] = colors   // <--

const [,,,,gren] = colors   // <-- หากต้องการเลือกแค่บางตัว

console.log(gren)
console.log(a)
// for (i=1;i<=colors.length;i++){
//     console.log(colors[i])
// }

//Object
const product = {
    pname : "Computer",
    price : 158000,
    stock : 100
}

// Properties:Variable
const {pname:productName,price:productPrice,stock:productStock} = product



console.log(productName,productPrice,productStock)