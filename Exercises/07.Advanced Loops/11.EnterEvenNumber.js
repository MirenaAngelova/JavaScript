function enterEvenNumber(array) {

    while (array.length > 0) {
        let nInput = array.shift();
        let n = nInput;
        try {
            console.log(`Enter even number: ${nInput}`);
            if (parseInt(n) !== nInput) {
                throw `Invalid number!`;
            }

            if (n % 2 == 0) {
                console.log(`Even number entered: ${n}`);
                break;
            } else {
                console.log(`The number is not even.`);
            }

        } catch (error) {
            console.log(error);
        }
    }

}
//enterEvenNumber(34);
enterEvenNumber([33, 15, 2, 5]);
//enterEvenNumber([35, 'hello', 12.85, 3464232636536513, 8]);