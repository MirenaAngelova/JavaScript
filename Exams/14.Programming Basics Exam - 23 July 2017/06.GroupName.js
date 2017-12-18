function groupName([upperFirst, lowSecond, lowThird, lowForth, digitFifth]) {
    upperFirst = upperFirst.charCodeAt(0);

    lowSecond = lowSecond.charCodeAt(0);
    lowThird = lowThird.charCodeAt(0);
    lowForth = lowForth.charCodeAt(0);
    digitFifth = Number(digitFifth);
    let counter = Number(0);

    for (let first = 65; first <= upperFirst; first++) {

        for (let second = 97; second <= lowSecond; second++) {

            for (let third = 97; third <= lowThird; third++) {

                for (let forth = 97; forth <= lowForth; forth++) {

                    for (let fifth = 0; fifth <= digitFifth; fifth++) {
                        counter++;
                        /* console.log(String.fromCharCode(first) +
                            String.fromCharCode(second) +
                            String.fromCharCode(third) +
                            String.fromCharCode(forth) +
                            fifth); */
                    }
                }
            }
        }
    }

    if (counter != 0) {
        console.log(counter - 1);
    }
}

groupName(['A', 'a', 'a', 'a', '0']);
groupName(['K', 'a', 'b', 'c', '5']);
groupName(['I', 'v', 'a', 'n', '1']);