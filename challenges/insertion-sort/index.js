module.exports = { insertionSort };
function insertionSort(arr) {
    // Write your code here
    if (arr.length > 10000) {
        return bigSort(arr);
    }
    return normalSort(arr);
}

function normalSort(arr) {
    let result = 0,
        n = arr.length,
        i,
        j,
        value;

    for (i = 1; i < n; ++i) {
        value = arr[i];
        j = i - 1; // (j1) HERE
        // Shifting array to one
        // location right
        while (j >= 0 && arr[j] > value) {
            arr[j + 1] = arr[j];
            j--;
        }
        // (j2) HERE
        // swap at: j + 1
        arr[j + 1] = value;
        result += i - 1 - j; // shift = j2 - j1
    }

    return result;
}

function bigSort(arr) {
    let result = 0,
        n = arr.length,
        i,
        j,
        value,
        loc;

    for (i = 1; i < n; ++i) {
        value = arr[i];
        j = i - 1; // (j1) HERE

        // Find location to insert
        // using binary search
        loc = Math.abs(binarySearch(arr, value, 0, j));

        // Shifting array to one
        // location right

        while (j >= loc) {
            arr[j + 1] = arr[j];
            j--;
        }
        // (j2) HERE
        // swap at: j + 1
        arr[j + 1] = value;
        result += i - 1 - j; // shift = j2 - j1
    }

    return result;
}

function binarySearch(a, item, low, high) {
    if (high <= low) return item > a[low] ? low + 1 : low;

    let mid = Math.floor((low + high) / 2);

    if (item == a[mid]) return mid + 1;

    if (item > a[mid]) return binarySearch(a, item, mid + 1, high);

    return binarySearch(a, item, low, mid - 1);
}

// input07
4999950000;
4999950000;
module.exports = {};
function insertionSort2(arr) {
    // Write your code here
    let result = mergeSortAndCount(arr, 0, arr.length - 1);
    // console.log("insertionSort", result);
    return result;
}

// Function to count the number of inversions
// during the merge process
function mergeAndCount(arr, l, m, r) {
    // Left subarray
    let left = [];
    for (let i = l; i < m + 1; i++) {
        left.push(arr[i]);
    }

    // Right subarray
    let right = [];
    for (let i = m + 1; i < r + 1; i++) {
        right.push(arr[i]);
    }
    let i = 0,
        j = 0,
        k = l,
        swaps = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k++] = left[i++];
        } else {
            arr[k++] = right[j++];
            swaps += m + 1 - (l + i);
        }
    }
    while (i < left.length) {
        arr[k++] = left[i++];
    }
    while (j < right.length) {
        arr[k++] = right[j++];
    }
    return swaps;
}

// Merge sort function
function mergeSortAndCount(arr, l, r) {
    // Keeps track of the inversion count at a
    // particular node of the recursion tree
    let count = 0;
    if (l < r) {
        let m = Math.floor((l + r) / 2);

        // Total inversion count = left subarray count
        // + right subarray count + merge count

        // Left subarray count
        count += mergeSortAndCount(arr, l, m);

        // Right subarray count
        count += mergeSortAndCount(arr, m + 1, r);

        // Merge count
        count += mergeAndCount(arr, l, m, r);
    }
    return count;
}
