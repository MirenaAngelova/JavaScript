function sumOrProduct([control]) {
    control = Number(control);
    let isFound = false;
    for (let a = 1; a < 30; a++) {

        for (let b = 1; b < 30; b++) {

            for (let c = 1; c < 30; c++) {


                if (a < b && b < c && a + b + c == control) {
                    console.log(`${a} + ${b} + ${c} = ${control}`);
                    isFound = true;
                }

                if (a > b && b > c && a * b * c == control) {
                    console.log(`${a} * ${b} * ${c} = ${control}`);
                    isFound = true;
                }
            }
        }
    }

    if (!isFound) {
        console.log('No!');
    }
}
sumOrProduct(['12']);
sumOrProduct(['100']);