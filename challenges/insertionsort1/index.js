/*
 * Complete the 'insertionSort1' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

function insertionSort1(n, arr) {
    // Write your code here
    for (var i = n - 1; i > 0; i--) {
        var value = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > value) {
            arr[j + 1] = arr[j];
            // console.log(arr.join(" "));
            j = j - 1;
        }
        if (arr[j + 1] != value) {
            arr[j + 1] = value;
            // console.log(arr.join(" "));
        }
    }
}
