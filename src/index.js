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

console.log(decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"))
console.log(decode('000000001100101010100000000010**********00111110110000101011000000101000111011100000111011**********00111010100000101110000011111100001011110000001110**********001010111000001111110011101011**********00101111110000101011000000111100101111100000101010**********0000111111001010101100000000100000101110**********000000001100101010100000000010**********0010111010000000101100111110100011101111**********000011101000001111110000111110'))
// module.exports = {
//     decode
// }