// escribe la función maxIndex acá

function maxIndex(array) {
    let zero = 0
    let index = 0
    for (let i = 0; i <= array.length; i++){
        if (array.length === 0) {
            index = -1
        }
        else if (zero < array[i]) {
            zero = array[i]
            index = i
        }
    }
    return index
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1