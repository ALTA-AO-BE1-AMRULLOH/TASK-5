function palindrome (string) {
  return string == string.split('').reverse().join('');
}

console.log(palindrome("civic"))       // true
console.log(palindrome("katak"))       // true
console.log(palindrome("kasur rusak")) // true
console.log(palindrome("kupu-kupu"))   // false
console.log(palindrome("lion"))        // false
