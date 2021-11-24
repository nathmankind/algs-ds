// Solution 2

function AddUp(n) {
    return n * (n +1)/2
}

AddUp()
let t1 = performance.now()
AddUp(1000000000)
let t2 = performance.now()

console.log(`Time elapsed: ${(t2-t1)/1000} seconds`)