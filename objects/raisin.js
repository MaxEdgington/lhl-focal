//
//function to identify chocolate chip and raisin cookies
//create function named rasin raisinAlarm



const raisinAlarm = function(cookie) {
  for (let ingredient of cookie) {
    if (ingredient === "🍇") {
      return "Raisin alert!";
    }
  }
  return "All good!";
  
};
  
//console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
//console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
//console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

const raisinAlarmArray = function(cookies) {
  let cookieBox = [];
  for (let cookie of cookies) {
    let answer = raisinAlarm(cookie);
    cookieBox.push(answer);
  }
  return cookieBox;
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);