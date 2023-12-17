function jumpingOnClouds(c) {
    // Write your code here
    let result = [],
        i = 0,
        n = c.length;

    while (i + 2 < n) {
        // Can double jumps
        if (c[i + 2] == 0) {
            i += 2;
            // (*1) Last jump: i + 2 >= n => break;
        } else {
            // always possible => c[i + 1] == 0
            i += 1;
        }
        result.push(i);
    }

    // (*1) Last jump
    if (i + 2 == n) {
        result.push(i + 2);
    }

    return result.length;
}

function jumpingOnClouds2(c) {
    // Write your code here
    let jumps = 0,
        i = 0,
        n = c.length;

    while (i + 2 < n) {
        // Can double jumps
        // i + 2 => (*1) Last jump: i + 2 >= n => break;
        // always possible => c[i + 1] == 0
        i += c[i + 2] == 0 ? 2 : 1;
        jumps++;
    }

    // (*1) Last jump
    if (i + 2 == n) {
        jumps++;
    }

    return jumps;
}
