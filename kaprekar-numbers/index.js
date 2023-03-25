/*
 * Complete the 'kaprekarNumbers' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER q
 */

function kaprekarNumbers(p, q) {
    // Write your code here
    let resultArr = [];
    for (let i = p; i <= q; ++i) {
        checkKaprekar(i) ? resultArr.push(i) : null;
    }

    process.stdout.write(resultArr.length > 0 ? resultArr.join(" ") : "INVALID RANGE");
}

function checkKaprekar(num) {
    let num2 = Math.pow(num, 2),
        len = num.toString().length,
        l = (num2 / Math.pow(10, len)) | 0,
        r = num2 % Math.pow(10, len);
    return l + r == num;
}
