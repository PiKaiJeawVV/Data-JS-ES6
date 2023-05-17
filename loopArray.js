const data = [10,20,30,40,50,60,70,80,90,100]

for (i = 0;i<=data.length;i++){
    console.log(data[i])
}

// Loop Array น่าสนใจ แต่ไม่สามารถใช้ break กับ continue
data.forEach(ele =>{
    console.log(ele)
})

// for of นี่ก็น่าสนใจ
for (const i of data){
    console.log(i)
}