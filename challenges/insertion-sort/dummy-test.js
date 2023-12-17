const { insertionSort } = require("./index");

let str1 = "1 2 3",
    str2 = "1 2 3",
    str3 = "1 2 3";

const arr1 = str1
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));
console.time("perf");
insertionSort(arr1);
console.timeEnd("perf");

const arr2 = str2
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

console.time("perf");
insertionSort(arr2);
console.timeEnd("perf");

const arr3 = str3
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

console.time("perf");
insertionSort(arr3);
console.timeEnd("perf");
