function cutTheSticks(arr) {
    // Write your code here
    arr.sort((a, b) => a - b);
    let i = 0,
        k = 0,
        count = 0,
        shortest,
        shortestIdx = 0,
        n = arr.length;
    let result = [];
    while (k < n) {
        count = 0;
        i = shortestIdx;
        shortest = arr[i];
        while (i < n && arr[n - 1] > 0) {
            if (arr[i] > 0) {
                // Find the shortest
                if (shortest <= 0) {
                    shortest = arr[i];
                    shortestIdx = i;
                    // backward
                    i--;
                } else {
                    // To cut sticks into smaller sticks
                    arr[i] -= shortest;
                    count++;
                }
            }
            i++;
        }
        if (count > 0) result.push(count);
        else break;
        k++;
    }

    return result;
}

function cutTheSticks1(arr) {
    // Write your code here
    arr.sort((a, b) => a - b);
    let i = 0,
        shortestIdx = 0,
        n = arr.length;
    let result = [];
    // Add first cut
    result.push(n);

    while (shortestIdx < n) {
        i = shortestIdx;

        while (i < n && arr[shortestIdx] >= arr[i]) i++;

        if (n - i > 0) result.push(n - i);
        shortestIdx = i;
    }

    return result;
}
