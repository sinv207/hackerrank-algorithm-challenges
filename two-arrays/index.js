/*
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

function twoArrays(k, A, B) {
    // Write your code here
    let sortedA = A.sort((a, b) => b - a);
    let sortedB = B.sort((a, b) => a - b);
    let len = A.length, i = 0;
    while (i < len && sortedA[i] + sortedB[i] >= k)
        i++;
    console.log('index', i);
    return i >= len ? "YES" : "NO";
}
