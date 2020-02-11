function Find(target, array) {
    // write code here
    // 边界条件
    if (array == null || array.length === 0 || array[0].length == 0) {
        return false;
    }
    const n = array.length;
    const m = array[0].length;
    let col = m - 1;
    let row = 0;
  
    while (col >= 0 && row < n) {
        if (target === array[row][col]) {
            return true;
        }
        if (target < array[row][col]) {
            col--;
        } else {
            row++;
        }
        
    }
    return false;
  }
  arr = [
    [1, 2, 3, 4], 
    [7, 8, 9, 12], 
    [8, 10, 11, 13] 
    ]
  console.log(Find(10, arr)) //true
  console.log(Find(14, arr)) //false