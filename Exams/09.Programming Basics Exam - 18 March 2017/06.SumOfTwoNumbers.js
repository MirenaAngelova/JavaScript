function sumOfTwoNumbers([start, end, magic]) {
    start = Number(start);
    end = Number(end);
    magic = Number(magic);

    let combSequence = Number(0);

    for (let first = start; first <= end; first++) {

        for (let second = start; second <= end; second++) {
            combSequence++;

            if (first + second == magic) {
                console.log(`Combination N:${combSequence} (${first} + ${second} = ${magic})`);
                return;
            }
        }
    }

    console.log(`${combSequence} combinations - neither equals ${magic}`);
}

sumOfTwoNumbers(['1', '10', '5']);
sumOfTwoNumbers(['23', '24', '20']);
sumOfTwoNumbers(['88', '888', '1000']);
sumOfTwoNumbers(['88', '888', '2000']);