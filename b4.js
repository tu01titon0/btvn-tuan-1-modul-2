function checkResult(number) {
    let arr = []
    for (var i = 1; i < number; i ++){
        if (number % i === 0){
            arr.push(i)
        }
    }
    return  arr.reduce((partialSum, a) => partialSum + a, 0) === number ? 'true' : 'false'
}
console.log(checkResult(7));