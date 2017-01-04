function truncatestring(str, num) {
  var svar = "";
  if (str.length > num) {
    svar = (str.slice(0,num-3)+ "...");
    console.log(svar);
  }else {
    console.log(str);
  }

}
truncatestring("A-tisket a-tasket A green and yellow baske", 11);
