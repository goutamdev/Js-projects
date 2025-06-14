function getMiddleCharacter(str) {
  const len = str.length;
  const mid = Math.floor(len / 2);

  if (len % 2 === 0) {
    return str[mid - 1] + str[mid]; // Two middle characters
  } else {
    return str[mid]; // Single middle character
  }
}

// Examples
console.log(getMiddleCharacter("hello")); // Output: "l"
console.log(getMiddleCharacter("book"));  // Output: "oo"
