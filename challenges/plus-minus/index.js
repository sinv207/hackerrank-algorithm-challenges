/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */


function plusMinus(arr) {
    // Write your code here
    let ratios = Array(3).fill(0);
    arr.forEach(num => num > 0 ? ratios[0]++ : (num < 0 ? ratios[1]++ : ratios[2]++));
    ratios.forEach(rat => console.log((rat / arr.length).toFixed(6)));
}