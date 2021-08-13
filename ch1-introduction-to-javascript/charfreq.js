/*
This Node program reads text from standard input, computes the frequency
of each letter in that text, and displays a histogram of the most
frequently used characters. It require Node 12 or higher to run.

In a Unix-type environment, you can invoke the program like this:
  node charfreq.js < corpus.txt
*/

// This class extends Map, so that the get() method returns the specified value, instead of null, when the key is not in the map
class DefaultMap extends Map {
  constructor(defaultValue) {
    super();  // Invoke superclass constructor
    this.defaultValue = defaultValue; // Remember the default value
  }

  get(key) {
    if (this.has(key)) {  // If the key is already in the map
      return super.get(key);  // return its value from superclass
    } else {
      return this.defaultValue;
    }
  }
}

// This class computes and displays letter frequency histograms
class Histogram {
  constructor() {
    this.letterCounts = new DefaultMap(0);  // Map from letters to counts
    this.totalLetters = 0;  // How many letters in all
  }

  // This function updates the histogram with the letters of text
  add(text) {
    // Remove whitespace from the text, and convert to upper case
    text = text.replace(/\s/g, "").toUpperCase();
    // Now loop through the characters of the text
    for(let character of text) {
      let count = this.letterCounts.get(character); // Get old count
      this.letterCounts.set(character, count+1);  // Increment it
      this.totalLetters++;
    }
  }
}
