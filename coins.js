/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

    var quarter = 0.25;
    var dime = 0.10;
    var nickel = 0.05;
    var penny = 0.01;


  var input = prompt("How much you got?");
  
function coinCounter () {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0
  };
// if statement for in quarter devide even return amount in quarter
    coinPurse.quarter = Math.floor(input / quarter); /* number of q
*/  coinPurse.dime = Math.floor((input - coinPurse.quarter * quarter) / dime );
    coinPurse.nickel = Math.floor((input - (coinPurse.quarter * quarter + coinPurse.dime * dime)) / nickel); 
    console.log((input - (coinPurse.quarter * quarter + coinPurse.dime * dime)) / nickel); 
    coinPurse.penny = Math.round((input - (coinPurse.quarter * quarter + coinPurse.dime * dime  + coinPurse.nickel * nickel)) / penny); 
    console.log((input - (coinPurse.quarter * quarter + coinPurse.dime * dime  + coinPurse.nickel * nickel)) / penny); 

  // need to set an imput

 console.log(coinPurse)
// need to calculate how many of each coin 
  // return coinPurse;
}

var coins = coinCounter(input)
console.log(coins);

