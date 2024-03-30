function search() {
  let arr = [1, 2, 3, 44, 5, 6];
  let x = 7;
  for (let i = 0; i < arr.length; i++) {
    if (x == arr[i]) {
      console.log(i);
      return;
    } 
  }
  console.log(-1)
}

search();
