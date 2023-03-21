function closestNumbers(arr) {
    // Write your code here
    let result = [];

    arr.sort((a, b) => a - b);

    let min = arr[arr.length - 1] - arr[0];

    for (let i = 0; i < arr.length - 1; ++i) {
        console.log("------");
        console.log("i", i, min);
        if (arr[i + 1] - arr[i] < min) {
           
            console.log("i", result);
            while (result.length > 0) {
                result.pop();
            }
            min = arr[i + 1] - arr[i];
            result.push(arr[i]);
            result.push(arr[i + 1]);
        } else if (arr[i + 1] - arr[i] == min) {
            result.push(arr[i]);
            result.push(arr[i + 1]);
        }
    }
    return result;
}

