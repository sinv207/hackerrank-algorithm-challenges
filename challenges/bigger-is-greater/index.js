/*
 * Complete the 'biggerIsGreater' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING w as parameter.
 */

function biggerIsGreater(w) {
    // Write your code here
    let result = "no answer";
    let arr = w.split("");
    let len = arr.length;
    let i = arr.length - 1;
    // Find non-increasing suffix
    while (i > 0 && arr[i - 1] >= arr[i]) i--;
    if (i <= 0) return result;

    // Find successor to pivot
    let j = arr.length - 1;
    while (arr[j] <= arr[i - 1]) j--;
    let temp = arr[i - 1];
    arr[i - 1] = arr[j];
    arr[j] = temp;

    // Reverse suffix
    j = arr.length - 1;
    while (i < j) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr.join("");
}
