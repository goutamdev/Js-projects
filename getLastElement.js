function getLastElement(arr) {
  if (arr.length === 0) return undefined;
  return arr[arr.length - 1];
}

// Example
console.log(getLastElement([10, 20, 30, 40])); // Output: 40
