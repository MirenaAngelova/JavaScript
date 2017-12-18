function numberTable(n) {

    for (let i = 0; i < n; i++) {
        let table = [];
        for (let j = 0; j < n; j++) {
            let num = i + j + 1;
            if (num > n) {
                num = 2 * n - num;
            }
            table.push(num);
            if (j != n - 1) {
                table.push(` `);
            }
        }
        console.log(table.join(''));
    }
}
numberTable(2);
numberTable(3);
numberTable(4);
numberTable(5);