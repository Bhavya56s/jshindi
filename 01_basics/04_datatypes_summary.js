// const id = Symbol('123')
// const name = Symbol('123')


// console.log(id===name)

// let myobj = {
//     name :"Bhavya",
//     age : 20

// }
// const MyFunction = function(){
//     console.log("Hellow world")
// }



// *******************************************

// Stack (Primitive) , Heap (Non Prmitive)


let myname = "Bhavya"

let anname = myname
anname = "Chirag"

console.log(anname)
console.log(myname)

let user = {
    email : "user@google.com",
    pass : "1234"
}
let usertwo = user

usertwo.email="user2@google.com"

console.log(user)
console.log(usertwo)