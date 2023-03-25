/*
 * Complete the 'balancedSums' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function balancedSums(arr) {
    // Write your code here
    let result = arr.length == 1;
    let leftSum = 0,
        rightSum = 0;
    if (arr.length > 1) {
        rightSum = arr.reduce((sum, num) => sum + num, 0);
        arr.forEach((num) => {
            rightSum -= num;
            if (leftSum == rightSum) {
                result = true;
                // do break
                return false;
            }
            leftSum += num;
        });
    }
    return result ? "YES" : "NO";
}
