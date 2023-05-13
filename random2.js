const arr = [1, 2, 3, 4, 5];
const index = 10; // Out of bounds index
var maxSum = 0;
if (index >= arr.length || index < 0) {
  throw new Error('Index out of bounds: ' + index);
}

// Access the element at the specified index
const element = arr[index];
console.log(element);
