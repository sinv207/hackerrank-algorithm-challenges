/* 
Learn:
reduce(total, current, index) => return total;
"a".charCodeAt(0)
fromCharCode(97)
 */

function designerPdfViewer(h, word) {
    // Write your code here
    let wArr = word.split("");
    let tallest = wArr.reduce((max, c) => {
        // "a" char code (assci) = 97
        // => toIndex = -97;
        let heigth = h[c.charCodeAt(0) - 97];
        if (max < heigth) max = heigth;
        return max;
    }, 0);
    return wArr.length * tallest;
}
