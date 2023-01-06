// Capitalize Exercise
// Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized (but the rest of the string unchanged).  For example:

// capitalize('eggplant') // "Eggplant"
// capitalize('pamplemousse') // "Pamplemousse"
// capitalize('squid') //"Squid"

// SOLUTION:

function capitalize(wordToCapitalize) {
  let slicedWord = wordToCapitalize.slice(0,1); // Single out the first character
  wordToCapitalize = wordToCapitalize.replace(slicedWord.toLowerCase(), slicedWord.toUpperCase()); // replace 
  return wordToCapitalize;
}