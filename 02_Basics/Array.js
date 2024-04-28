// let arr = [1, 2, 3, 4,5];

// console.log( "A " ,arr);

// // Array can be of different data types

// let NewArr = ["anand" , false, 32, 54]
// console.log("B " , NewArr)

let myArr = new Array(1,2,4,3,5,5)
console.log("C " ,myArr)

// myArr.push(67)
// myArr.push(78)
// myArr.push(90)
// console.log("After pushing the element")
// console.log("D " ,myArr)

// myArr.pop()
// myArr.pop()
// console.log("After popping the element")
// console.log("E ", myArr)

// myArr.unshift(56)
// myArr.shift(56)
// myArr.shift(1)
// console.log(myArr)

const myArr2 = myArr.join()
console.log(myArr)
console.log(typeof myArr)
console.log(myArr2)
console.log(typeof myArr2)

const myN1 = myArr.slice(2,4)
console.log(myN1)
console.log(myArr)
const myN2 = myArr.splice(2,4)
console.log(myN2)
console.log(myArr)