let ett_or = 12;
let monad = 0;
let dagar= 0;
let tisdagar = 0;
let allamonader= 0;
let antal_dagar_i_monad = {
   1: 31,
   2 : 28,
   3: 31,
   4: 30,
   5: 31,
   6:30,
   7:31,
   8:31,
   9:30,
   10:31,
   11:30,
   12:31
 }
 let tisdag= 2
 for(var i = 1 ; i <= ett_or; i++){
   monad = antal_dagar_i_monad[i];
   for(var j= 1; j<= monad; j++){
     dagar+=1;

   }
 }
 for(var k = 1;k <= dagar; k++){
   if (k == tisdag){
     tisdagar +=1
     tisdag += 7;

   }

 }
 console.log(dagar,tisdagar)
