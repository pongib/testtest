var C = {};
C.coins = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
C.getChange = function(totalPayable, cashPaid){
  'use strict'
  var change = [];
   var length = C.coins.length;
   var remaining = cashPaid - totalPayable;          // we reduce this below

   for (var i = 0; i < length; i++) { // loop through array of notes & coins:
       var coin = C.coins[i];

       if(remaining/coin >= 1) { // check coin fits into the remaining amount
           var times = Math.floor(remaining/coin);        // no partial coins

           for(var j = 0; j < times; j++) {     // add coin to change x times
               change.push(coin);
               remaining = remaining - coin;  // subtract coin from remaining
           }
       }
   }
   return change;

  // var change = cashPaid - totalPayable;
  // var changePaid = [];
  // var length = C.coins.length;
  // var onetime = false;
  //
  // for (var i = 0; i < length; i++) {
  //   if(change >= C.coins[i]){
  //     change -= C.coins[i];
  //     changePaid.push(C.coins[i]);
  //     onetime = true;
  //     for (var j = i; j < length && onetime; j++) {
  //       if(change >= C.coins[j]){
  //         onetime = false;
  //         change -= C.coins[j];
  //         changePaid.push(C.coins[j]);
  //       }
  //     }
  //   }
  // }
  //
  // return changePaid;
};

module.exports = C;
