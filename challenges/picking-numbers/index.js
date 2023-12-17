/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    // Write your code here

    let currentLen = 1, maxLen = 1;

    a.sort((a, b) => a - b);

    for (let i = 0; i < a.length - 1; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[j] - a[i] > 1) {
                break;
            } else {
                currentLen++;
            }
        }

        maxLen = Math.max(maxLen, currentLen);

        currentLen = 1;
    }

    return maxLen;
}