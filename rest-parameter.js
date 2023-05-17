//Rest parameter
// summation=(x,y)=>{
//     return x + y
// }
// สามารถส่ง Parameter กี่ตัวก้ได้
summation=(...numberArr)=>{
    let total = 0
    for(let number of numberArr) total += number
    return total
}

//console.log(summation(5,7)) 
console.log(summation(77,88,99))