/*
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function findDigits(n) {
    // Write your code here
    return n
        .toString()
        .split("")
        .reduce((count, d) => (count += (d != 0 && n % d == 0) * 1), 0);
}

module.exports = { findDigits };
