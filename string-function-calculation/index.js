function maxValue(t) {
    // Write your code here
    let subLen = 1;
    let result = t.length,
        len = t.length;
    let refs = {};
    // loop on length of substring
    while (subLen < (len > 2000 ? 2000 : len)) {
        let fs = 0;
        let i = 0;

        while (i < len - subLen) {
            let s = t.substring(i, i + subLen);
            if (refs[s] == undefined) {
                fs = subLen * occurrences(t, s);
                refs[s] = fs;
            }
            ++i;
        }
        ++subLen;
    }
    console.log("maxValue", refs);

    console.log("maxValue", Object.keys(refs).length);

    Object.keys(refs).forEach((s) => (result = result < refs[s] ? refs[s] : result));

    return result;
}

function occurrences(string, subString) {
    string += "";
    subString += "";
    if (subString.length <= 0) return string.length + 1;

    var n = 0,
        pos = 0,
        step = 1;

    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}

function maxValue2(t) {
    // Write your code here
    let result = t.length,
        len = t.length,
        arr = t.split("");

    let i = 0,
        refs = [{}]; // lengh of substring

    let prevKeys,
        founded = false,
        info,
        s,
        childInfo,
        step = 1;

    const RUN_LENGTH = 2;

    // console.time("perf1");
    while (i < len) {
        let k = 0;

        if (i == 0) {
            // init root of tree: info of subLen == 1
            while (k < len) {
                if (refs[i][arr[k]] == undefined) {
                    let pos = [];
                    arr.forEach((c, idx) => {
                        if (arr[k] == c) pos.push(idx);
                    });
                    refs[i][arr[k]] = {
                        len: 1,
                        pos: pos,
                        count: pos.length,
                        fs: pos.length,
                    };
                }
                ++k;
            }
            ++i;
            continue;
        }

        // test
        // if (i % 100 == 0) {
        //     console.log("refs-i", i, step);
        //     console.time("perf3");
        // }

        refs[i] = {};
        // each length of substring
        if (i == 2) step = 2;
        prevKeys = Object.keys(refs[i - step]); // i - 1
        founded = false;

        prevKeys.forEach((key) => {
            // substring length start from 2 to t.length - 1
            info = refs[i - step][key];
            // if (info == undefined || (info.increased == false && i > len / 2)) return true;
            // WHen founded: only dive deep 1 true branch
            if (founded && (info == undefined || info.runLength < RUN_LENGTH)) return true;
            info.pos.forEach((q) => {
                if (q + i < len) {
                    if (step == 2) {
                        s = key + arr[q + i - 1] + arr[q + i];
                    } else {
                        s = key + arr[q + i];
                    }

                    // children with same path. ex: "a" -> "ab" -> "abd" -> "abcdd"
                    childInfo = refs[i][s];
                    if (childInfo == undefined) {
                        refs[i][s] = {
                            // extend object info base on root item
                            len: info.len + step, // substring length
                            pos: [q], // list of position in String t
                            // count: 1, // Number times s occurs in t
                            fs: info.len + step, // calulated value and max
                        };
                    } else {
                        // len: not changed
                        childInfo.pos.push(q);
                        // childInfo.count += 1;
                        childInfo.fs += childInfo.len;

                        // When count substring > 1:
                        // childInfo.increased = info.fs < childInfo.fs;
                        childInfo.runLength = 0;

                        // update calulated value at root
                        if (result < childInfo.fs) {
                            result = childInfo.fs;

                            childInfo.runLength = info.runLength + 1;

                            // test
                            // if (childInfo.runLength == RUN_LENGTH) {
                            //     console.timeEnd("perf1");
                            //     console.log(
                            //         "maxValueFounded",
                            //         i,
                            //         prevKeys.length,
                            //         info,
                            //         childInfo,
                            //         s
                            //     );
                            // }
                            // True branch that have answer is founded
                            if (!founded && childInfo.runLength > RUN_LENGTH) founded = true;
                        }
                    } // end-next loop
                }
            });
        });

        // if (i % 100 == 0) {
        //     console.timeEnd("perf3");
        // }
        if (founded) step = 1;
        i += step;
    }

    // console.log("maxValue", refs);
    // console.log("maxValue", result);
    return result;
}

function buildTree() {}

t = "aaaaaa";
t = "abcabcddd";

t =
    "abaabbaaaaabbbbbbbabbbbaaaaaabbaababaaabaaabbbbaabbaaaaaaaaabbaaaabbababbaaabbababbaabaabbbbabbbaaaaaabbaaabbaaaaaaabbababaabbbbbbbbbbbbbbaabbabbbbaaababbaaaababbbbaaabbbbbaaabbabbabbbababbbbbaaaabababbbbbaaaaabababbbbabbbabaaababbaabbbbabbaabbaaaaabbbabaababbabbaababbbababaabaabbbaaababbabbbaabbaaababbbbaaaaabaababaabababbaabaabaabbbabbaabaaababbaabbbabbaaaabaaabbbbbbbabbabbaaaaabbaabbabbabaaabbbabababbbbbabaaabababbbbbababababababababbaababababababbbababaaabbaaababababbbaabbbabababaaabbaaaaaabaaababbbbbaaaaabaaaababaabaabbbabbbbbaaaaabaabbabbbabaababbbabbbababbaababaaabbbbaaaaaaabbabababaaaaaababbbbbabaabaababbabaaabbbbabaaaaaabbbbabbbbababaaaaaababbaababbabbaaaabaaaababbabbbbbbbabbbbaaabbabaaaaababbbaaaabbbaabbaaaaaaaaababaabbababbabbbaabbbabbbbabbaababbaaaababbbaaaababaaaabaabbabaaabaabaaabbbbbbbabbbabbbbbabbbbbbbbaabaaabbbabababaabbaaaabbabababbaabbaaabbbbaabaaabaabbaabbaabbabbbababababbaabbaabbbabbbababaaabbbabaaaabbbaaaaabbbaaababbbbbaabbaababbaaaabaabaabaabbbbbaaaabbbbaaabaabaaabaabbaaaaabbbbbbbabbbbaaaaaabbaababaaabaaabbbbaabbaaaaaaaaabbaaaabbababbaaabbababbaabaabbbbabbbaaaaaabbaaabbaaaaaaabbababaabbbbbbbbbbbbbbaabbabbbbaaababbaaaababbbbaaabbbbbaaabbabbabbbababbbbbaaaabababbbbbaaaaabababbbbabbbabaaababbaabbbbabbaabbaaaaabbbabaababbabbaababbbababaabaabbbaaababbabbbaabbaaababbbbaaaaabaababaabababbaabaabaabbbabbaabaaababbaabbbabbaaaabaaabbbbbbbabbabbaaaaabbaabbabbabaaabbbabababbbbbabaaabababbbbbababababababababbaababababababbbababaaabbaaababababbbaabbbabababaaabbaaaaaabaaababbbbbaaaaabaaaababaabaabbbabbbbbaaaaabaabbabbbabaababbbabbbababbaababaaabbbbaaaaaaabbabababaaaaaababbbbbabaabaababbabaaabbbbabaaaaaabbbbabbbbababaaaaaababbaababbabbaaaabaaaababbabbbbbbbabbbbaaabbabaaaaababbbaaaabbbaabbaaaaaaaaababaabbababbabbbaabbbabbbbabbaababbaaaababbbaaaababaaaabaabbabaaabaabaaabbbbbbbabbbabbbbbabbbbbbbbaabaaabbbabababaabbaaaabbabababbaabbaaabbbbaabaaabaabbaabbaabbabbbababababbaabbaabbbabbbababaaabbbabaaaabbbaaaaabbbaaababbbbbaabbaababbaaaabaabaabaabbbbbaaaabbbbaaabaabaaabaabbaaaaabbbbbbbabbbbaaaaaabbaababaaabaaabbbbaabbaaaaaaaaabbaaaabbababbaaabbababbaabaabbbbabbbaaaaaabbaaabbaaaaaaabbababaabbbbbbbbbbbbbbaabbabbbbaaababbaaaababbbbaaabbbbbaaabbabbabbbababbbbbaaaabababbbbbaaaaabababbbbabbbabaaababbaabbbbabbaabbaaaaabbbabaababbabbaababbbababaabaabbbaaababbabbbaabbaaababbbbaaaaabaababaabababbaabaabaabbbabbaabaaababbaabbbabbaaaabaaabbbbbbbabbabbaaaaabbaabbabbabaaabbbabababbbbbabaaabababbbbbababababababababbaababababababbbababaaabbaaababababbbaabbbabababaaabbaaaaaabaaababbbbbaaaaabaaaababaabaabbbabbbbbaaaaabaabbabbbabaababbbabbbababbaababaaabbbbaaaaaaabbabababaaaaaababbbbbabaabaababbabaaabbbbabaaaaaabbbbabbbbababaaaaaababbaababbabbaaaabaaaababbabbbbbbbabbbbaaabbabaaaaababbbaaaabbbaabbaaaaaaaaababaabbababbabbbaabbbabbbbabbaababbaaaababbbaaaababaaaabaabbabaaabaabaaabbbbbbbabbbabbbbbabbbbbbbbaabaaabbbabababaabbaaaabbabababbaabbaaabbbbaabaaabaabbaabbaabbabbbababababbaabbaabbbabbbababaaabbbabaaaabbbaaaaabbbaaababbbbbaabbaababbaaaabaabaabaabbbbbaaaabbbbaaabaabaaabaabbaaaaabbbbbbbabbbbaaaaaabbaababaaabaaabbbbaabbaaaaaaaaabbaaaabbababbaaabbababbaabaabbbbabbbaaaaaabbaaabbaaaaaaabbababaabbbbbbbbbbbbbbaabbabbbbaaababbaaaababbbbaaabbbbbaaabbabbabbbababbbbbaaaabababbbbbaaaaabababbbbabbbabaaababbaabbbbabbaabbaaaaabbbabaababbabbaababbbababaabaabbbaaababbabbbaabbaaababbbbaaaaabaababaabababbaabaabaabbbabbaabaaababbaabbbabbaaaabaaabbbbbbbabbabbaaaaabbaabbabbabaaabbbabababbbbbabaaabababbbbbababababababababbaababababababbbababaaabbaaababababbbaabbbabababaaabbaaaaaabaaababbbbbaaaaabaaaababaabaabbbabbbbbaaaaabaabbabbbabaababbbabbbababbaababaaabbbbaaaaaaabbabababaaaaaababbbbbabaabaababbabaaabbbbabaaaaaabbbbabbbbababaaaaaababbaababbabbaaaabaaaababbabbbbbbbabbbbaaabbabaaaaababbbaaaabbbaabbaaaaaaaaababaabbababbabbbaabbbabbbbabbaababbaaaababbbaaaababaaaabaabbabaaabaabaaabbbbbbbabbbabbbbbabbbbbbbbaabaaabbbabababaabbaaaabbabababbaabbaaabbbbaabaaabaabbaabbaabbabbbababababbaabbaabbbabbbababaaabbbabaaaabbbaaaaabbbaaababbbbbaabbaababbaaaabaabaabaabbbbbaaaabbbbaaabaabaaabaabbaaaaabbbbbbbabbbbaaaaaabbaababaaabaaabbbbaabbaaaaaaaaabbaaaabbababbaaabbababbaabaabbbbabbbaaaaaabbaaabbaaaaaaabbababaabbbbbbbbbbbbbbaabbabbbbaaababbaaaababbbbaaabbbbbaaabbabbabbbababbbbbaaaabababbbbbaaaaabababbbbabbbabaaababbaabbbbabbaabbaaaaabbbabaababbabbaababbbababaabaabbbaaababbabbbaabbaaababbbbaaaaabaababaabababbaabaabaabbbabbaabaaababbaabbbabbaaaabaaabbbbbbbabbabbaaaaabbaabbabbabaaabbbabababbbbbabaaabababbbbbababababababababbaababababababbbababaaabbaaababababbbaabbbabababaaabbaaaaaabaaababbbbbaaaaabaaaababaabaabbbabbbbbaaaaabaabbabbbabaababbbabbbababbaababaaabbbbaaaaaaabbabababaaaaaababbbbbabaabaababbabaaabbbbabaaaaaabbbbabbbbababaaaaaababbaababbabbaaaabaaaababbabbbbbbbabbbbaaabbabaaaaababbbaaaabbbaabbaaaaaaaaababaabbababbabbbaabbbabbbbabbaababbaaaababbbaaaababaaaabaabbabaaabaabaaabbbbbbbabbbabbbbbabbbbbbbbaabaaabbbabababaabbaaaabbabababbaabbaaabbbbaabaaabaabbaabbaabbabbbababababbaabbaabbbabbbababaaabbbabaaaabbbaaaaabbbaaababbbbbaabbaababbaaaabaabaabaabbbbbaaaabbbbaaabaabaa";

console.time("perf");
maxValue2(t);
console.timeEnd("perf");

// test
