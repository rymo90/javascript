function reptistring(str, num) {
  if (num==1) {
    console.log(str);
  }else if (num < 1) {
    console.log("");
  }else {
    console.log(str.repeat(num + ""));
  }
}
reptistring("hej", 3);
