const { stringSimilarity5 } = require("./index");

let testArr1 = [],
    s2 = "";

console.time("perf");
testArr1.forEach((s) => console.log("count", stringSimilarity5(s)));
console.timeEnd("perf");

console.time("perf");
for (let i = 0; i < 10; ++i) console.log("count", stringSimilarity5(s2));

console.timeEnd("perf");
// DAJACKIEL
// DAJACKNIEL
