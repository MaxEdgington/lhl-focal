// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  //  for (let i = 0; i < names.length; i+//+) {
      
  names.forEach((name,index) =>{
    if (name === "Waldo") {
      found([index]);   // execute callback
    }
  });
};
      
   
findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log(`Found Waldo at index ${index}!`);
});

