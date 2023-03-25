/*
 * Complete the 'cavityMap' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function cavityMap(grid) {
    // Write your code here
    let numRow = grid.length;
    let numCol = grid[0].toString().length;
    let matrix = [];
    let result = [];
    grid.forEach((num) => matrix.push(num.split("")));
    for (let i = 0; i < numRow; ++i) {
        result[i] = [];
        for (let j = 0; j < numRow; ++j) {
            // check cavity cell
            if (
                i > 0 &&
                i < numRow - 1 &&
                j > 0 &&
                j < numCol - 1 &&
                matrix[i][j] > matrix[i - 1][j] &&
                matrix[i][j] > matrix[i][j - 1] &&
                matrix[i][j] > matrix[i][j + 1] &&
                matrix[i][j] > matrix[i + 1][j]
            ) {
                result[i][j] = "X";
            } else {
                result[i][j] = matrix[i][j];
            }
        }
    }
    return result.map((row) => row.join(""));
}
