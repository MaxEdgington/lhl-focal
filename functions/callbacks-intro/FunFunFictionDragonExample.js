const dragonEvents = [
  {type: 'attack', value: 12, target: 'player-dorkman'},
  {type: 'yawn', value: 40},
  {type: 'eat', value: 12, target: 'horse'},
  {type: 'attack', value: 12, target: 'player-fluffykins'},
  {type: 'attack', value: 12, target: 'player-dorkman'},
];

const totalDamageOnDorkman = dragonEvents


// shortened arrow syntax

  .filter(event => event.type === 'attack')
  .filter(event => event.target === 'player-dorkman')
  .map(event => event.value)
  .reduce((prev,value) => (prev || 0) + value);

console.log('totalDamageOnDorkman\n', totalDamageOnDorkman);

/*

previous code:

const totalDamageOnDorkman = dragonEvents

  .filter(function isAttack(event){
    return event.type === 'attack'
  })
  .filter(function isDorkman(event){
    return event.target === 'player-dorkman'
  })
  .map(function(event){
    return event.value
  })
  .reduce(function(prev,value){
    return(prev || 0) + value
  })
*/

