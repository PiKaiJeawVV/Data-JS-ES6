// จะ filter ออกมาแล้วสร้างเป็น Array อันใหม่
const data = [10,20,30,40]
const result = data.filter(ele=>{
     return ele>20
})

console.log(result)

// Object
const emp = [
    {name:"JingJing",salary:15000,department:"Dancer"},
    {name:"Nana",salary:30000,department:"Vocal"},
    {name:"Ping",salary:150000,department:"Dancer"},
    {name:"Sita",salary:28000,department:"Vocal"},
]


const res = emp.filter(ele=>{
    return ele.salary>15000
}).filter(ele=>{
    return ele.department==="Vocal"
})

console.log(res)