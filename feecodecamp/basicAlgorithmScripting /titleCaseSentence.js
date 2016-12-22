function titleCaseSentence(str) {
    var a = str.toLowerCase().split(' ');
    var b = a.map(function(c) {
        return c.replace(c.charAt(0), c.charAt(0).toUpperCase());
    });
    return b.join(" ");
}
var svar = titleCaseSentence("what is Your favorite Programing language mine is Go... just kidding it's javaScript.");
console.log(svar);
