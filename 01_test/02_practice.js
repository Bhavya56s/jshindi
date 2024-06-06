function calc(Distance,petrol) {
    if(Distance*0.1*2 <= petrol) return true

    return false
    
}

const check = calc(0.5,1)

console.log(check);