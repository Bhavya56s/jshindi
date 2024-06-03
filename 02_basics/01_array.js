const myArr = [1,3,4,5,6,7]

const myArr2 = new Array(4,5,4,3)

// console.log(myArr2[3])

// Array methods

// myArr.push(9)
// myArr.pop()
// myArr.unshift(3)
// myArr.shift()
// console.log(myArr)
// console.log(myArr.includes(0))
// console.log(myArr.indexOf(0))
// console.log(myArr.indexOf(1))

// const newRR = myArr.join()
// console.log(myArr);
// console.log(newRR)
// console.log(typeof newRR)

// slice , Spice

// console.log("A ",myArr)
// const myn1 = myArr.slice(1,4)
// console.log(myn1);

// console.log("B ",myArr)
console.log("A ",myArr)
const myn1 = myArr.splice(1,4)
console.log(myn1);

console.log("B ",myArr)

// Slice se particular part cut ho gyaa and original array pe koi issue ni aaya
// splice se particular part cut hokar riginal aaray mai say gyab ho gya