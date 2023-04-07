function showResult(arr, n) {
    const new_arr = [];
    for (let i = 0; i < arr.length; i += n) {
        new_arr.push(arr.slice(i, i + n));
    }
    return new_arr;
  }
  const arr = [1, 2, 3, 4, 5, 7];
  const n = 3;
  
  console.log(showResult(arr, n));
  