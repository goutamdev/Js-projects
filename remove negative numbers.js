// Function to remove negative numbers from an array
function removeNegativeNumbers(arr) {
  return arr.filter(num => num >= 0);
}

// Example usage:
console.log(removeNegativeNumbers([1, -2, 3, -4, 5])); // Output: [1, 3, 5]
