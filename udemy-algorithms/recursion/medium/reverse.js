

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'

function reverse(s) {
    if(!s){
        return '';
    }
    return s.charAt(s.length-1) + reverse(s.substr(0,s.length-1));
}