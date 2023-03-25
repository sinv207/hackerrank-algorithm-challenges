/*
 * Complete the 'permutationEquation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY p as parameter.
 */

function permutationEquation(p) {
    // Write your code here
    let result = [];
    let x = 1,
        n = p.length,
        py,
        y; // condition: py = p(y) = index of x;
    while (x <= n) {
        for (let i = 0; i < n; ++i) {
            if (x == p[i]) {
                py = i + 1;
                break;
            }
        }

        for (let j = 0; j < n; ++j) {
            if (py == p[j]) {
                y = j + 1;
                result.push(y);
                break;
            }
        }
        x++;
    }
    return result;
}
