console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false


function isPalindrome(s){
    if(s.length == 1) return true;
    if(s[0] === s[1]) return true;
    if(s[0] === s.slice(-1)) {
        return isPalindrome(s.slice(1,-1));
    }
    return false;
}

