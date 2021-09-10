function getMiddle(s ='') {
    const l = s.length;
    return l % 2 === 0 ? s.substr( (l/2)-1,2) : s.substr(l/2,1)
}

console.log(getMiddle("test"))
console.log(getMiddle("testing"))
console.log(getMiddle("middle"))
console.log(getMiddle("A"))

