// ลดข้อมูลใน Array
const data = [10,20,30,40]

const emp = [
    {name:"JingJing",salary:15000,department:"Dancer"},
    {name:"Nana",salary:30000,department:"Vocal"},
    {name:"Ping",salary:150000,department:"Dancer"},
    {name:"Sita",salary:28000,department:"Vocal"},
]
// โครงสร้าง array.reduce((ค่าที่ถูกประมาณผล, element)=>{},ค่าเริ่มต้น)

//หาผลรวมใน Array
const result = data.reduce((value,ele)=>{
    return total = ele + value
},0)

console.log(result)

// หาผลรวมเงินเดือนใน Object
const summation = emp.reduce((value,ele)=>{
    //console.log(ele.salary)
    return total1 = ele.salary + value
},0)

console.log(summation)