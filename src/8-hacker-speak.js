export const hackerSpeak = (words) => {
  const arr = {
      "a": "4",
      "e": "3",
      "i": "1",
      "o": "0",
      "s": "5",
      "A": "4",
      "E": "3",
      "I": "1",
      "O": "0",
      "S": "5"
  }
  for (var key in arr) {
      words = replacer(key, arr[key], words)
  }

  return words
}

function replacer(word, replacement, fullString) {
  fullString = fullString.replace(new RegExp(word, "g"), replacement)
  return fullString
}



