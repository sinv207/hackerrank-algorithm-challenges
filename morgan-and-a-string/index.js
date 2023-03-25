function morganAndString(a, b) {
    // Write your code here
    let result = [];
    let arrA = a.split(""),
        arrB = b.split("");
    let i = 0,
        j = 0,
        lenA = arrA.length,
        lenB = arrB.length;

    console.log("----------------");
    console.log("morganAndString", { lenA, lenB });

    while (i < lenA && j < lenB) {
        let q = 0;

        while (i + q < lenA && j + q < lenB && arrA[i + q] == arrB[j + q]) ++q;

        // test
        if (i + j >= errIndex - 1 && i + j < errIndex + 3) {
            console.log("error", { i, j, a: arrA[i], b: arrB[j], q });
            if (i + j == errIndex) {
                console.log("error: a", arrA.slice(i - 1, i + 3).join(""));
                console.log("error: b", arrB.slice(j - 1, j + 3).join(""));
            }
        } else if (i + j == errIndex + 3) {
            console.log("error", result.slice(errIndex, i + j).join(""));
        }

        if (arrA[i + q] < arrB[j + q]) {
            result.push(arrA[i]);
            ++i;
        } else {
            result.push(arrB[j]);
            ++j;
        }
    }
    // console.log("morganAndString - before", result.join(""), { i, j });

    // Append remain letters
    if (i < lenA) {
        for (let k = i; k < lenA; ++k) result.push(arrA[k]);
    } else {
        for (let k = j; k < lenB; ++k) result.push(arrB[k]);
    }

    // console.log("morganAndString - final", result.join(""), { i, j, len: result.length });
    console.log("morganAndString - final", { i, j, len: result.length });
    return result.join("");
}

function morganAndString2(a, b) {
    // Write your code here
    let result = [];
    let arrA = a.split(""),
        arrB = b.split("");
    let i = 0,
        j = 0,
        lenA = arrA.length,
        lenB = arrB.length;

    // safe
    arrA.push("z");
    arrB.push("z");

    let runLength = { i: -1, j: -1, count: -1 };

    while (i < lenA && j < lenB) {
        let q = 0;

        while (i + q < lenA && j + q < lenB && arrA[i + q] == arrB[j + q]) {
            // Optimize Step: dont count again
            if (runLength.i >= 0 && i + q < i + runLength.count) {
                q += runLength.count;
            } else {
                q++;
            }
        }

        if (arrA[i + q] < arrB[j + q]) {
            result.push(arrA[i]);
            ++i;
        } else {
            result.push(arrB[j]);
            ++j;
        }

        // Optimize Step: save last count and index
        if (q > 100) {
            runLength = { i: i, j: j, count: q - 2 }; // 1: increase idx & 1: pop item
        } else {
            runLength = { i: -1 };
        }
    }

    // Append remain letters
    if (i < lenA) {
        for (let k = i; k < lenA; ++k) result.push(arrA[k]);
    } else {
        for (let k = j; k < lenB; ++k) result.push(arrB[k]);
    }

    return result.join("");
}
