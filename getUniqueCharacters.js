function getUniqueCharacters(str) {
  let result = '';
  for (let char of str) {
    if (!result.includes(char)) {
      result += char;
    }
  }
  return result;
}

// Example
console.log(getUniqueCharacters("hello")); // Output: "helo"
