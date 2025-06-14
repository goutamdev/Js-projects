function findSmallest(arr) {
  if (arr.length === 0) return undefined;
  return Math.min(...arr);
}

// Example
console.log(findSmallest([4, 2, 8, 1, 9])); // Output: 1
