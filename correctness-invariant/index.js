function insertionSort(ar) {

    for (var i = 1; i < ar.length; i++) {
        var value = ar[i];
        var j = i - 1;
        while (j >= 0 && ar[j] > value) {
            ar[j + 1] = ar[j];
            j = j - 1;
        }
        ar[j + 1] = value;
    }
    return ar;
}