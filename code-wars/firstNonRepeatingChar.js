function firstNonRepeatingLetter(s) {
    return s.charAt(s.toLowerCase().split('').findIndex((v, i, a) => {
        return a.indexOf(v) === a.lastIndexOf(v);
    })) || ''
}


console.log(firstNonRepeatingLetter('sTreSS'));
console.log(firstNonRepeatingLetter('abba'));
console.log(firstNonRepeatingLetter('stress'));
console.log(firstNonRepeatingLetter('moonmen'));
