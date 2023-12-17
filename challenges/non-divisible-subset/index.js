/*
 * Complete the 'nonDivisibleSubset' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY s
 */

function nonDivisibleSubset(k, s) {

    let remainders = new Array(k).fill(0);
   
    s.forEach(num => remainders[num % k]++);
    let result = 0;

    if (remainders[0] !== 0) {
        result += 1;
    }
    
    if (k % 2 == 0 && remainders[k / 2] !== 0) {
        result += 1;
    }

    for (let i = 1; i < k / 2; i++) {
        result += Math.max(remainders[i], remainders[k - i]);
    }
    return result;
}