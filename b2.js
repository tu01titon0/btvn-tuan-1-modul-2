function maxArray(arr1, arr2 , arr3, arr4){
    let arr = [arr1, arr2 , arr3, arr4]
    let new_arr = []
    for(let i = 0; i < arr.length; i ++){
        new_arr.push(arr[i].reduce((partialSum, a) => partialSum + a, 0))
    }
    for(let j = 0; j < arr.length; j++) {
    }
    let index = new_arr.indexOf(Math.max(...new_arr));
    return arr[index]
}
let arr1 = [1, 2, 3, 4]
let arr2 = [1, 2, 3, 10]
let arr3 = [1, 2, 3, 7]
let arr4 = [1, 2, 3, 1]
console.log(maxArray(arr1, arr2 , arr3, arr4))