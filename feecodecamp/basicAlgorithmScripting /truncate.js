function truncatestring(str,num) {
  if (str.length > num && num > 3) {
   console.log(str.slice(0, (num - 3)) + '...');
 } else if (str.length > num && num <= 3) {
   console.log(str.slice(0, num) + '...');
 } else {
   console.log(str);
 }
}
truncatestring("jag heter redwan yasin", 3);
