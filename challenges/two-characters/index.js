/**
 * NG
 * @param {*} s
 * @returns
 */
function alternate(s) {
    // Write your code here
    let result = 0,
        count = 0;
    let arr = s.split("");
    let n = arr.length;

    let i = 0;
    let counterRef = {};
    let uniqueArr = [];
    for (let i = 0; i < n; i++) {
        if (counterRef[arr[i]] == undefined) {
            counterRef[arr[i]] = 1;
            uniqueArr.push(arr[i]);
        } else counterRef[arr[i]]++;
    }

    console.log(counterRef);
    console.log(uniqueArr);

    for (let i = 0; i < uniqueArr.length - 1; i++) {
        for (let j = i + 1; j < uniqueArr.length; j++) {
            count = counterRef[uniqueArr[i]] + counterRef[uniqueArr[j]];
            console.log("-----", i, j, uniqueArr[i], uniqueArr[j], count);
            let k = 0,
                q = 0,
                last;
            while (k < n) {
                // find first position
                q = 0;
                while (k + q < n && arr[k + q] != uniqueArr[i] && arr[k + q] != uniqueArr[j])
                    q++;

                console.log({ k, q });
                if (last == undefined) last = arr[k + q];
                else if (q != 0 && last == arr[k + q]) {
                    console.log({ last, curr: arr[k + q] });
                    count = 0;
                    break;
                }

                k += q != 0 ? q : 1;
            }
            if (count > 0) console.log("founded", uniqueArr[i], uniqueArr[j], count);
            if (result < count) result = count;
        }
    }
    return result;
}