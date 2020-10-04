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
    return expr
        .split('**********')
        .map((item) => item
            .match(/.{1,10}/g)
            .map((el) => el
                .match(/.{1,2}/g)))
        .map(li => li
            .map( item => item
                .map (el => el.replace(/00/g, '')
                .replace(/10/g, '.')
                .replace(/11/g, '-'))
                    .join('')))
        .map(li => li
            .map( item => item = MORSE_TABLE[item])
            .join(''))
        .join(' ');
}

module.exports = {
    decode
}