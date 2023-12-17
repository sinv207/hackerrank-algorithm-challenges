/*
 * Complete the 'jimOrders' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts 2D_INTEGER_ARRAY orders as parameter.
 */

function jimOrders(orders) {
    // Write your code here
    let customers = [];
    for (let i = 0; i < orders.length; ++i) {
        let serveTime = orders[i][0] + orders[i][1];
        arrangeCustomers(customers, i + 1, serveTime);
    }
    console.log(customers);
    return customers.map((cus) => cus[0]);
}

function arrangeCustomers(customers, id, serveTime) {
    console.log(id, customers);
    if (customers.length == 0) customers.push([id, serveTime]);
    else {
        // Step 0: append
        customers.push([id, serveTime]);
        // Step 1: arrange into correct positon
        for (let i = customers.length - 1; i > 0; --i) {
            let value = customers[i];
            let j = i - 1;
            // cus[i] = [id, serveTime] <=> cus[i][1] = serveTime
            while (j >= 0 && customers[j][1] > value[1]) {
                customers[j + 1] = customers[j];
                j = j - 1;
            }
            customers[j + 1] = value;
        }
    }
    return customers;
}
