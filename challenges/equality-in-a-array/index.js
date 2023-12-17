function equalizeArray(arr) {
    // Write your code here
    arr.sort((a, b) => a - b);
    let n = arr.length,
        i = 0,
        j = 0,
        result;
    result = n - 1;
    while (i < n) {
        j = i + 1;
        while (j < n && arr[i] == arr[j]) j++;

        if (result > n - (j - i)) result = n - (j - i);
        i = j;
    }
    return result;
}
