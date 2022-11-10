const canWin = num => {
    let turn = 0
    while(true){
        if(turn === 0) {
            if( num >= 5) {
                num -= 5
            } else if(num >= 3){
                num -= 3
            } else if (num >= 2) {
                num -= 2
            } else {
                return console.log('false') 
                
            }
            turn++

        } else {
            if( num >= 5) {
                num -= 5
            } else if(num >= 3){
                num -= 3
            } else if (num >= 2) {
                num -= 2
            } else {
                return console.log('true') 
                
            }
            turn--
        }
    }
}


// console.log(canWin(1))
// console.log(canWin(2))
// console.log(canWin(3))
// console.log(canWin(4))
// console.log(canWin(5))
// console.log(canWin(6))
// console.log(canWin(7))
// console.log(canWin(8))
// console.log(canWin(9))
// console.log(canWin(10))

canWin(1)
// false

canWin(2)
// true

canWin(3)
// true

canWin(4)
// true

canWin(5)
// true

canWin(6)
// true

canWin(7)
// false

canWin(8)
// false

canWin(9)
// true

canWin(10)
// true
