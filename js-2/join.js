function join(array) {
    let word = ""
    for (let i = 0; i <= array.length-1; i++){
        word = word + array[i] + " "
    }
    return word
}

str = join(["Hello", "word", 123, false])
console.log(str)
console.log(typeof str)