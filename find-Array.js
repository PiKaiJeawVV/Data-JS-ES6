// indexOf(ข้อมูล). ผมจากการค้นหาจะเป็นเลข Index ที่ค้นเจอ หากไม่เจอ จะติดลบ -1
const colors = ['แดง','ดำ','ทอง','ฟ้า','เขียว']

let display = colors.indexOf("เหลือง")
console.log(display)

//find(ข้อมูล) หากไม่เจอจะขึ้น undefined
let o1 = colors.find(ele => ele === "เหลือง")
console.log(o1)

//findIndex
let o2 = colors.findIndex(ele => ele === "ฟ้า")
console.log(o2)