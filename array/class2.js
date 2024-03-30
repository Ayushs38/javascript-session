let array = ["Honda", "Audi", "BMW", "Kia", "Maruti"];

//foreach

// array.forEach(myFunction);

// function myFunction(value) {
//   console.log(value);
// }

function pushFun(arr) {
  array.push("Mercedes");

  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

pushFun(array);
