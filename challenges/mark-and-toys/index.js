/*
 * Complete the 'maximumToys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY prices
 *  2. INTEGER k
 */

function maximumToys(prices, k) {
    // Write your code here
    prices.sort((a, b) => a - b);
    let count = 0, sum = 0;
    for (let i = 0; i < prices.length; ++i) {
        sum += prices[i];
        if (sum <= k) count++;
        else break;
    }
    return count;
}