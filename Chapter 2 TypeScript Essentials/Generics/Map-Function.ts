const map = <T, U>(array: T[], func: (item: T) => U) => {
  // Check if the array is empty
  if (array.length === 0) {
    return array;
  }
  // Create a new array to collect values
  let result = [];
  // Loop through each item and call the func
  for (let i = 0; i < array.length; i++) {
    result[i] = func(array[i]);
  }
  // return new array
  return result;
};

let numbers1 = [1, 3, 4, 6, 9, 7, 10, 12];
const conveted = map(numbers1, (num) => num.toString());
// @ts-ignorez
