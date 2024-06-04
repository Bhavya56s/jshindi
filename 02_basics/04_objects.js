// const tinderuser = new Object() singleton

const user = {}  //non singleton

user.id = "123abc"
user.name = "Bhavya"
user.isloogedin = false

console.log(user);

const regularuser = {
    email : "abc@gmail.com",
    fullName : {
        userFullname : {
            firstname : "Bhavya",
            lastname : "Singhal"
        }
    }

}
// console.log(regularuser.fullName.userFullname.firstname)

// const obj1 = { 1 :"a",2 : "b"}
// const obj2 = { 3 :"c",4 : "d"}
// // const obj3 = { obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
// const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4)

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(user.hasOwnProperty('islooged'));

const tutor = {
    coursename : "Js in hindi",
    fees : 1000,
    courseInstructor : "Hitesh"
}

const {courseInstructor : Instructor} = tutor

console.log(Instructor)