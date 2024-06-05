let userInput = prompt("Please enter your input:");
console.log("User Input: ", userInput);

const output = Fizzbuzz(userInput);

console.log(output);


function Fizzbuzz(input){
    if(typeof input !== 'number')
        return NaN;
 
    if(input%3 === 0)
       return "Fizz";
    
    if(input%5 === 0)
       return "Buzz";
    
    if(input%3==0 && input%5==0 )
        return "FizzBuzz";
    
    
     return input

}
