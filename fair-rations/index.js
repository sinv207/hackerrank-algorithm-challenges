/*
 * Complete the 'fairRations' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY B as parameter.
 */

function fairRations(B) {
    // Write your code here
    let result = 0;
    for (let i = 0; i < B.length - 1; ++i) {
        if(B[i] % 2 == 1) {
            B[i] += 1;
            B[i + 1] += 1;
            result += 2;
        }
    }
    if(B[B.length - 1] % 2 == 1) {
        return "NO";
    } 
    return result.toString();
}