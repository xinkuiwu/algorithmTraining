function Find(target, array) {
    // write code here
    const n = array.length,
      m = array[0].length;
    let row = n - 1,
      col = 0;
    if (m === 0 && n === 0) {
      return false;
    }
    while (row >= 0 && col <= m - 1) {
      if (array[row][col] > target) {
        row--;
      } else if (array[row][col] < target) {
        col++;
      } else return true;
    }
    return false;
  }
  arr = [
    [1, 2, 3], // 3
    [7, 8], // 2
    [8, 9, 10] // 3
    ]
  console.log(Find(3, arr))