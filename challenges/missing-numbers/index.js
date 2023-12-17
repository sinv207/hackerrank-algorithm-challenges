module.exports = { missingNumbers };
function missingNumbers(arr, brr) {
    // Write your code here
    arr.sort((a, b) => a - b);
    brr.sort((a, b) => a - b);

    let i, idx;
    i = 0;
    while (i < brr.length) {
        idx = arr.indexOf(brr[i]);
        if (idx >= 0) {
            // logical remove item
            arr[idx] = -1;
            idx = arr.indexOf(brr[i]);
            brr[i] = -1;
        }
        i++;
    }
    return brr.filter((b, index) => b > -1 && brr.lastIndexOf(b) == index);
}
