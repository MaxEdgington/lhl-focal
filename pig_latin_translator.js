var originalWords = process.argv.slice(2);
var pigLatinWords = [];



for (var i = 0; i < originalWords.length; i++) {
    console.log(translateToPigLatin(originalWords[i]));
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
}


function translateToPigLatin(word) {
    return word.slice(1, word.length) + word[0] + "ay";
  }