function magicNumbers([n]) {
    n = Number(n);

    let product = 1;

    let magic = [];

    for (let first = 1; first <= n; first++) {

        for (var second = 1; second <= n; second++) {

            for (var third = 1; third <= n; third++) {

                for (var fourth = 1; fourth <= n; fourth++) {

                    for (var fifth = 1; fifth <= n; fifth++) {

                        for (var sixth = 1; sixth <= n; sixth++) {

                            product = first * second * third * fourth * fifth * sixth;
                            if (product == n) {
                                magic.push(first, second, third, fourth, fifth, sixth);
                                magic.push(' ');
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(magic.join(''));
}

magicNumbers(['2']);
magicNumbers(['8']);
magicNumbers(['531441']);