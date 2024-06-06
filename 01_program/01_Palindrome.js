
let rem,rev=0,a

function Palindrome(num) {
     a=num
    while(num!=0){
         rem = num%10
         rev = rev*10 + rem
        num = Math.floor(num/10)
    }
    if(a==rev) return "palindrome"
    return "Not a palindrome"
}

console.log(Palindrome(1331)) 