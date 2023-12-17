const { find, find2 } = require('./sum');
const { findDigits } = require('./challenges/find-digits');
const { kFactorization } = require('./challenges/k-factorization');

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });

// test('find digit of 1012', () => {
//     expect(findDigits(1012)).toBe(3);
// });

// test('kFactorization 12, [2 3 4] be [1 3 12]', () => {
//     expect(kFactorization(12, [2, 3, 4])).toBe([1, 3, 12]);
// });

test('Find normal', () => {
    let arr = [3, 4, 3, 3, 3, 5, 6, 7, 2, 2];
    expect(find(arr)).toMatchObject({ idx: 2, count: 3 });
});

test('Find normal 2', () => {
    let arr = [4, 4, 3, 3, 3, 5, 6, 7, 2, 2];
    expect(find(arr)).toMatchObject({ idx: 2, count: 3 });
});

test('Find normal 3', () => {
    let arr = [2, 4, 3, 3, 3, 5, 6, 7, 2, 2];
    expect(find(arr)).toMatchObject({ idx: 2, count: 3 });
});

test('Find normal 4', () => {
    let arr = [2, 2, 2, 4, 3, 3, 3, 5, 6, 7];
    expect(find(arr)).toMatchObject({ idx: 0, count: 3 });
});

test('Find duplicate', () => {
    let arr = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
    expect(find(arr)).toMatchObject({ idx: 0, count: 10 });
});

test('Find unique', () => {
    let arr = [3, 4, 5, 6, 7, 2];
    expect(find(arr)).toMatchObject({ idx: 0, count: 1 });
});

test('Find 2: normal', () => {
    let arr = [3, 4, 3, 3, 3, 5, 6, 7, 2, 2];
    expect(find2(arr)).toMatchObject({ idx: 2, count: 6 });
});

test('Find 2: normal 2', () => {
    let arr = [4, 4, 3, 3, 3, 5, 6, 7, 2, 2];
    expect(find2(arr)).toMatchObject({ idx: 2, count: 6 });
});

test('Find 2: normal 3', () => {
    let arr = [2, 4, 3, 3, 3, 5, 6, 7, 2, 2];
    expect(find2(arr)).toMatchObject({ idx: 2, count: 6 });
});

test('Find 2: normal 4', () => {
    let arr = [2, 2, 2, 4, 3, 3, 3, 5, 6, 7];
    expect(find2(arr)).toMatchObject({ idx: 4, count: 6 });
});

test('Find 2: duplicate', () => {
    let arr = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
    expect(find2(arr)).toMatchObject({ idx: 0, count: 10 });
});

test('Find 2: unique', () => {
    let arr = [3, 4, 5, 6, 7, 2];
    expect(find2(arr)).toMatchObject({ idx: 0, count: 5 });
});
