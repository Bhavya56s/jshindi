// function myNew(){
//     console.log("H");
//     console.log("H");
//     console.log("H");
//     console.log("H");

// }
// myNew()



// function Addition(Num1,Num2) {
//     console.log(Num1+Num2);
// }
// function Addition(Num1,Num2) {
//     // let result = Num1 + Num2
//     return Num1 + Num2
// }

// const result = Addition(4,5)
// console.log("Result", result);

// function Login(user) {
    
//     return `${user} just logged in`
// }

// console.log(Login("Bhavya"))

// function price(val1,...num1) {
//     return num1
    
// }
// console.log(price(100,200,400,40,60,300))

const user = {
    name :"BHavya",
    price : 100

}
function handleobject(anyobject) {
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}` )
    
}

// handleobject(user)
handleobject({
    name :"Rakesh",
    price : 100
})

const myarray = [1,2,3,4,5]

function getarray(value) {
    return value[0]
    
}
console.log(getarray(myarray))