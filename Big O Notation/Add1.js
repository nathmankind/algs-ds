/*
* Suppose we have write a function that calculates the sum of all number from 1 up to (and including) some number n
*/

function AddUpTo(n) {
    let total = 0
    for (let i = 0; i <= n; i++) {
        total += i
    }
    return total
}



let t1 = performance.now()
AddUpTo(1000000000)
let t2 = performance.now()

console.log(`Time elapsed: ${(t2-t1)/1000} seconds`)