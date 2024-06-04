const mySym = Symbol("Key1")

const jsuser = {
    name:"Bhavya",
    "another name":"Dhruv",
    [mySym] : ["mykwy1"],
    age:19,
    email:"Bhavya@google.com",
    password:"23",
    isLoggedIn : false,
    LoggedInDays : ["Monday","Tuesday"]
}
// console.log(jsuser.name);
// console.log(jsuser["another name"]);

// jsuser.email = "bhavya@facebook.com"
// Object.freeze(jsuser)
// jsuser.email = "chirag@gmail.com"
// console.log(jsuser);

jsuser.greeting = function(){
    console.log("Good Morning")
}
jsuser.greetingtwo = function(){
    console.log(`Good Morning , ${this.name}`)
}

console.log(jsuser.greetingtwo())
