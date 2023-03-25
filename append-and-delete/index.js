/*
 * Complete the 'appendAndDelete' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER k
 */

function appendAndDelete(s, t, k) {
    // Write your code here
    let i = 0,
        minLen = Math.min(s.length, t.length);
    while (i < minLen && s[i] == t[i]) ++i;
    if (i == 0) {
        return s.length + t.length <= k ? "Yes" : "No";
    }
    console.log(i, s.length + t.length - 2 * i);

    if (i == minLen) {
    }
    return s.length + t.length - 2 * i <= k ? "Yes" : "No";
}
