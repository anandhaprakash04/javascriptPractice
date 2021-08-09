function isPangram(str = '') {
  const alphabet =  'abcdefghijklmnopqrstuvwxyz';
  return alphabet.split('').every((letter) => {
      return str.toLowerCase().indexOf(letter) >= 0;
  })
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))
console.log(isPangram("This is not a pangram"))