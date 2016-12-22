// a function that checks if the input str
// spells the same way both forward and backward


function palindromes(str) {
    return str.replace(/[\W_]/g, '').toLowerCase() === str.replace(/[\W_]/g,
        "").toLowerCase().split('').reverse().join('');
}
var svar = palindromes("never odd or even")
console.log(svar);
