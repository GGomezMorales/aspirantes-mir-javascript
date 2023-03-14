// escribe la función max acá
function max(array) {
    let zero = 0
    for (let i = 0; i <= array.length; i++){
        if (array.length === 0) {
            zero = undefined
        }
        else if (zero < array[i]) {
            zero = array[i]
        }
    }
    return zero
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 70, 6, 5, 400])) // 10
console.log(max([])) // undefined