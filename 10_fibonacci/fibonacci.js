const fibonacci = function(n) {
    if (n < 0) return "OOPS";

    return (n <= 2 && n > 0) ? 1 : (n == 0) ? 0 : parseInt(fibonacci(n-1)) + parseInt(fibonacci(n-2));
};

// Do not edit below this line
module.exports = fibonacci;
