const myNums = [1,2,3,4]

// const newNums = myNums.reduce(function (acc,cur) {
//     console.log(`${acc} ${cur}`)
//     return acc+cur
    
// },2)

const newNums = myNums.reduce((acc,cur) => acc+cur,0)
console.log(newNums)

