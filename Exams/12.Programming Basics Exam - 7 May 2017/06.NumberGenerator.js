function numberGenerator([m, n, l, special, control]) {
    m = Number(m);
    n = Number(n);
    l = Number(l);
    special = Number(special);
    control = Number(control);

    let str = '';
    let num = Number(0);


    for (let first = m; first >= 1; first--) {

        for (let second = n; second >= 1; second--) {

            for (let third = l; third >= 1; third--) {
                str = first + second + third;
                num = parseInt(str);
                if (num % 3 == 0) {
                    special += 5;
                } else if (num % 10 == 5) {
                    special -= 2;
                } else if (num % 2 == 0) {
                    special *= 2;
                }

                if (special >= control) {
                    console.log(`Yes! Control number was reached!` +
                        ` Current special number is ${special}.`);
                    return;
                }
            }
        }
    }

    console.log(`No! ${special} is the last reached special number.`)
}

numberGenerator(['9', '7', '3', '2', '44']);
numberGenerator(['1', '1', '7', '1', '308']);