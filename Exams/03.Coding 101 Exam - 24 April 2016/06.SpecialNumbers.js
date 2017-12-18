function specialNumbers([n]) {
    n = Number(n);
    let special = [];

    for (let first = 1; first <= (Math.min(n, 9)); first++) {

        for (let second = 1; second <= (Math.min(n, 9)); second++) {

            for (let third = 1; third <= (Math.min(n, 9)); third++) {

                for (let fourth = 1; fourth <= (Math.min(n, 9)); fourth++) {

                    if (n % first == 0 && n % second == 0 && n % third == 0 && n % fourth == 0) {
                        special.push(first, second, third, fourth);
                        special.push(' ');
                    }
                }
            }
        }
    }

    console.log(special.join(''));
}

specialNumbers(['3']);
specialNumbers(['11']);
specialNumbers(['16']);