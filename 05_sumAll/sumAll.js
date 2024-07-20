const sumAll = function(first, second) {
    if (first < 0 || second < 0 || typeof first !== 'number' || typeof second !== 'number') return 'ERROR';

    let sum = 0;

    let number = (first < second) ? first : second;

    let condition = (first > second) ? first : second;

    for (let i = number; i <= condition; i++) sum += i;

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
