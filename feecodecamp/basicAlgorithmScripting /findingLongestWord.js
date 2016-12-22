function findingLongestWord(str) {
    var splitord = str.split(' ');
    var longord = 0;
    for (var i = 0; i < splitord.length; i++) {
        if (splitord[i].length > longord) {
            longord = splitord[i].length;
        }
    }
    return longord
}
var svar = findingLongestWord("To day i was walking to the mall with my pigamas");
console.log(svar);
