function confirmtheEnd(str, target) {
    if (str.substring(str.length - target.length) === target) {
        return true;
    } else {
        return false;
    }
}
var svar = confirmtheEnd("does my name end with wan", "wan");
console.log(svar);
