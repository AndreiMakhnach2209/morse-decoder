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
    ' ': ' '
};

function decode(expr) {
    let result = '',
        symbolMorzeBin = '',
        symbolMorzeElem = '',
        symbolMorze = '';

    // write your solution here
    while (expr.length > 0) {
        symbolMorzeBin = expr.slice(0, 10);
        expr = expr.slice(10);
        symbolMorze = '';
        while (symbolMorzeBin.length > 0) {
            symbolMorzeElem = symbolMorzeBin.slice(0, 2);
            symbolMorzeBin = symbolMorzeBin.slice(2);
            switch (symbolMorzeElem) {
                case '10':
                    symbolMorze += '.';
                    break;
                
                case '11':
                    symbolMorze += '-';            
                    break;
                case '**':
                    symbolMorze = ' ';
            }
        }
        result += MORSE_TABLE[symbolMorze]        
    }
    return result;
}

module.exports = {
    decode
}