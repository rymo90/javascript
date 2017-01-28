
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  if (arr.includes(num)=== true){
    arr.sort(function(a,b){
      return a-b;
    });
    for(var i=0; i< arr.length; i++){
       if (arr[i]==num){
         return i;
       }
    }
  }else{
    var nylista = arr;
    nylista.push(num);
    nylista.sort(function(a,b){
      return a-b;
    });
    for(var j=0;j<nylista.length;j++){
      if(nylista[j]==num){
        return j;
      }
    }
    
  }
}
getIndexToIns([2, 20, 10], 19);
