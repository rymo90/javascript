// checking in multiple arrays and
// return largest nummer of them
function largestNumberInArrays(str) {
    var lista = [];
    for (var i = 0; i < str.length; i++) {
        var longnum = 0;
        for (var j = 0; j < str[i].length; j++) {
            if (str[i][j] > longnum) {
                longnum = str[i][j];
            }
        }
        lista[i] = longnum;
    }
    return lista;
}

var svar = largestNumberInArrays([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1]
]);
console.log(svar);
