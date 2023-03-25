/*
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n) {
    // Write your code here
    let bits = n.toString(2);
    let len = bits.length;
    let result = 0;
    for (let i = 0; i < 32; ++i) {
        if(i < len) {
            result += bits[len - 1 - i]  == 0 ?  Math.pow(2, i) : 0; 
        } else {
            result += Math.pow(2, i)
        }
    }
    return result;
}