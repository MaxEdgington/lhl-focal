for (let i = 0; i < process.argv.length; i++) {
  let temp = "";
  for (let j = 0; j < process.argv.length[i]; j++) {
    temp.unshift(j);
  }
  console.log(temp);
}