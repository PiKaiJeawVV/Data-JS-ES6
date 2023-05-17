//แบบเดิม
function old_fullname(fname,lname){
    return fname+lname
}

//แบบใหม่
fullname=(fname,lname)=>fname+lname


// console.log(old_fullname("NaNa","CGM"))
// console.log(fullname("jingjing","CGM"))

const number1 = [100,200,300,400,500]
const number2 = [10,20,30,40]

//number2.push(number1)
let total = number1.concat(number2)
console.log(total)
console.log(total.length)