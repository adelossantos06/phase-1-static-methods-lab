class Formatter {
  static capitalize(str) {
    const firstLetter = str.charAt(0)
    const firstLetterCap = firstLetter.toUpperCase()
    const remaingLetters = str.slice(1)
    const capStr = firstLetterCap + remaingLetters
    return capStr
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-'\s]+/g, "",)
  }

  static titleize(str) {
    return str
      .split(' ')
      .map((word, index) => {
        if (index === 0) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
        else if ((word === 'the') || (word === 'and') || (word === 'a') || (word === 'an') || (word === 'but') || (word === 'of') || (word === 'for') || (word === 'at') || (word === 'by') || (word === 'from')) {
          return word;
        } else {
          return word.charAt(0).toUpperCase() + word.slice(1)

        }
      })
      .join(' ')
  }
}

// Instructions
// You are going to write three static methods in the Formatter class. Write your code in the index.js file. Let the tests guide you through the process.



// Write a method static titleize that takes in a string and capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.