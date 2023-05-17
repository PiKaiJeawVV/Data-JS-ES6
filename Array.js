const data = [10,20,30,40]
console.log(data)

// push //<-- เพิ่มค่าลงไปใน Array เพิ่มต่อท้าย
data.push(...[500,1000,2000]) 
console.log(data)

// pop //<-- ลบข้อมูลใน Array ที่อยู่หลังสุดออกไป
data.pop()
console.log(data)

// shift //<-- ลบข้อมูลใน Array ที่อยู่หน้าสุดออกไป
data.shift()
console.log(data)

// unshift  //<-- เพิ่มข้อมูลเข้าไปหน้าสุด
data.unshift(1,2,3,4)
console.log(data)

// splice  (ตำแหน่งที่จะลบ , จำนวนที่จะลบ , สมาชิกที่ต้องการแทรกเข้าไปในตำแหน่ง)
const number = [10,20,30,40,50]
// number.splice([1],2,555)
// console.log(number)

// slice (แสดงตำแหน่งเริ่มต้น,ตำแหน่งสุดท้าย -1) <-- ข้อมูลใน Array ตัน จะไม่ถูกนำมาใช้งาน ต้องสร้างตัวแปรเพื่อเก็บ
let mixArray = number.slice(1,3)
console.log(mixArray)