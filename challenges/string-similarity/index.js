// console.time("perf");
// twoArrays(10, A2, B2);
// console.timeEnd("perf");

function stringSimilarity(s) {
    let arr = s.split("");
    let i,
        k,
        count = arr.length;
    for (i = 1; i < arr.length; ++i) {
        k = 0;
        while (k < arr.length && arr[k] == arr[i + k]) ++k;
        count += k;
    }
    return count;
}

function stringSimilarity2(s) {
    // Write your code here
    let arr = s.split("");
    let i,
        k,
        count = arr.length,
        len = arr.length;
    for (i = 1; i < len; ++i) {
        k = 0;
        while (k < len - i && arr[k] == arr[i + k]) ++k;
        count += k;
    }
    return count;
}

function stringSimilarity4(s) {
    // Write your code here
    let arr = s.split("");
    let i,
        k,
        count = arr.length,
        len = arr.length;

    let skipStep = arr.length > 10000 ? 2 : 1;
    skipStep = 3;
    for (i = 1; i < len; ++i) {
        k = 0;
        while (k < len - i - skipStep && arr[k] == arr[i + k]) k += skipStep + 1;
        count += k;

        let q = 0;
        while (q < skipStep && k + q < len - i && arr[k + q] == arr[i + k + q]) ++q;
        count += q;

        // console.log("count", { i, k, count });
    }
    return count;
}

function stringSimilarity3(s) {
    let arr = s.split("");
    let i,
        k,
        count,
        len = arr.length;

    // Run length object
    let rlenArr = [];
    if (len > 1) {
        i = 0;
        k = 0;
        // build Run Length object
        while (i < len) {
            while (k < len - 1 && arr[k] == arr[k + 1]) {
                ++k;
            }
            rlenArr.push({
                index: i,
                count: k,
            });
            i += k;
        }

        // start to count
        count = len;
        // for each subfix
        for (i = 1; i < len; ++i) {
            k = 0;
            // count the similarities character
            rlenArr.forEach((obj) => {
                if (arr[k] == arr[i + k]) {
                    if (i + k == obj.index) {
                        count += obj.count;
                        k += obj.count;
                    } else {
                        count += obj.count - (i + k) - obj.index;
                        k += obj.count - (i + k) - obj.index;
                    }
                } else {
                    return false;
                }
            });

            count += k;
        }
        return count;
    } else {
        count = len;
        // for each subfix
        for (i = 1; i < len; ++i) {
            k = 0;
            // count the similarities character
            while (k < len - i && arr[k] == arr[i + k]) ++k;
            count += k;
        }
        return count;
    }
}

function runLength(arr) {
    let i,
        k,
        len = arr.length;

    let rlenArr = [];
    i = 0;
    k = 0;
    // build Run Length object
    for (i = 0; i < len - 1; ++i) {
        if (arr[i] == arr[i + 1]) {
            ++k;
            if (i == len - 2) {
                rlenArr.push({
                    val: arr[i],
                    index: i,
                    count: k + 1,
                });
            }
        } else {
            rlenArr.push({
                val: arr[i],
                index: i - k,
                count: k + 1,
            });
            k = 0;

            // last
            if (i == len - 2) {
                rlenArr.push({
                    val: arr[len - 1],
                    index: len - 1,
                    count: 1,
                });
            }
        }
    }

    // console.log("rlenArr", rlenArr);
    return rlenArr;
}

/// FInal function
function stringSimilarity5(s) {
    let arr = s.split("");
    let i,
        k,
        q,
        count = arr.length,
        len = arr.length;

    let rlenArr = runLength(arr);

    for (i = 1; i < len; ++i) {
        k = 0;
        q = 0;
        while (k < len - i && q < rlenArr.length && arr[k] == arr[i + k]) {
            // upadate algorithms
            if (i + k <= rlenArr[q].count) {
                // shift to right i step
                if (k == 0) k -= i;
                k += rlenArr[q].count;
                // After shift: ensure index is valid
                if (k < 0) k += i;
                q++;
            } else {
                ++k;
            }
        }
        // last item: check valid range
        if (k >= len - i) k -= i + k - len;

        count += k;
    }
    return count;
}

module.exports = { stringSimilarity5 };
