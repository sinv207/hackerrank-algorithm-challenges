/*
 * Complete the 'strangeCounter' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER t as parameter.
 */

function strangeCounter(t) {
    // Write your code here
    let stepCount = Math.log2(Math.floor((t - 1) / 3) + 1);
    let startValue = Math.pow(2, stepCount | 0) * 3;
    let startTime = startValue - 2;
    return startValue - (t - startTime);
}