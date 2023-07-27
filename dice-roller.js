let args = process.argv.slice(2);

// dice roll function that uses a d6
const diceRoll = function() {
  return (Math.floor(Math.random() * 6 + 1));
};


const diceRoller = function(args) {
  let numOfRolls = args;
  
  let returnedString = `Rolled ${args} dice:`;

  // I can also implement  (let i=0; i < numOfRolls -1; i++) which  is great because by going to num-1 you bypass the need for a if condition too


  while (numOfRolls > 1) {
    let roll = diceRoll();
    returnedString += roll + ", ";
    numOfRolls--;
  }
  return returnedString += diceRoll();

};

console.log(diceRoller(args));
