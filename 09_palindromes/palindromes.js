const palindromes = function (str) {
    let temp = str.toLowerCase().split('').filter(letter => (letter >= 'a' && letter <= 'z') || (letter >= '0' && letter <= '9')).join('');
    str = temp.split('').reverse().join('');
    return temp === str;
};

// Do not edit below this line
module.exports = palindromes;
