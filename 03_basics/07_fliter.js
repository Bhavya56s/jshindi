// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => {
//    return  num>4
// })

// console.log(newNums)

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => num>4)

// console.log(newNums)

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map((num) => num+4)

// console.log(newNums)

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums
               .map((num) => num+4)
               .map((num) => num*10)
               .filter((num) => num>70)
console.log(newNums)