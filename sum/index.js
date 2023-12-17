function find(arr) {
    let n = arr.length,
        i = 0,
        j = 0;

    let result = {
        idx: 0,
        count: 1,
    };

    while (i < n) {
        j = i + 1;
        while (j < n && arr[i] == arr[j]) j++;

        if (result.count < j - i) {
            result = {
                idx: i,
                count: j - i,
            };
        }
        i = j;
    }
    console.log(result);
    return result;
}

function find2(arr) {
    console.log('----', arr);
    let n = arr.length,
        i = 0,
        j = 0;

    let result = {
        idx: 0,
        count: 1,
    };

    while (i < n) {
        j = i + 1;
        while (j < n && arr[j - 1] <= arr[j]) j++;

        if (result.count < j - i) {
            result = {
                idx: i,
                count: j - i,
            };
        }
        i = j;
        console.log(i, result);
    }

    console.log(result);

    return result;
}

module.exports = { find, find2 };
