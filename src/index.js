const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let result = [];

  for (let i = 0; i < expr.length; i += 10) {
    let str = expr.substr(i, 10);
    result.push(str);
  }

  return result
    .map((elem) => {
      let temp = "";
      for (let i = 0; i < elem.length; i += 2) {
        let str = elem.substr(i, 2);
        if (str === "10") {
          temp += ".";
        } else if (str === "11") {
          temp += "-";
        }
      }
      return MORSE_TABLE[temp] ? MORSE_TABLE[temp] : " ";
    })
    .join("");
}

module.exports = {
    decode
}
