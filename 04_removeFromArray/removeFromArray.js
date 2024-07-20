const removeFromArray = function (arr, ...restArg) {
  for (arg of restArg) {
    let isThereAnyNumber = false;
    do {
      isThereAnyNumber = false;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arg && typeof arg == typeof arr[i]) {
          arr.splice(i, 1);
          isThereAnyNumber = true;
          break;
        }
      }
    } while (isThereAnyNumber == true);
  }

  console.log(arr);

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
