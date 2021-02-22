const str = "abpppapple";
const word = "apple";

console.log(isSubsequence(str, word)) // true
function isSubsequence(str, word) {
  let idx = 0
  for (const letter of word) {
    const letterIdx = str.indexOf(letter, idx)
    idx = letterIdx + 1
    if(letterIdx < 0 || idx > str.length) {
        return false
    }
  }
  return true
}

function isSubsequenceWithDict(str, word) {
    const dict = {}
    for (let i = 0; i < str.length; i++) {
        const letter = str[i]
        dict[letter] = dict[letter] ? dict[letter].push(i) : [i]
    }
    let lastIdx = 0
    
}
