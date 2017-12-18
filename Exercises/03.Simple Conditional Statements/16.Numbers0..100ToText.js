function numberToText([n]) {
    n = n.toString();
    let lengthN = n.length;
    let digitFirst = n.substring(0, 1);

    let zeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five',
        'six', 'seven', 'eight', 'nine'
    ];

    let tenToNinety = ['#', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty',
        'seventy', 'eighty', 'ninety'
    ];

    let elevenToNineteen = ['#', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
        'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];

    if (lengthN == 1) {
        console.log(zeroToNine[parseInt(n)]);

    } else if (lengthN == 2 && parseInt(n) >= 10 && parseInt(n) <= 99) {
        let digitSecond = n.substring(1, 2);

        if (digitSecond == 0) {
            console.log(tenToNinety[digitFirst]);

        } else if (digitFirst == 1) {
            console.log(elevenToNineteen[digitSecond]);

        } else {
            console.log(tenToNinety[digitFirst] + ' ' + zeroToNine[digitSecond]);
        }

    } else if (n == '100') {
        console.log(zeroToNine[digitFirst] + ' hundred');
    } else {
        console.log('invalid number');
    }
}

numberToText(['0']);
numberToText(['1']);
numberToText(['15']);
numberToText(['20']);
numberToText(['22']);
numberToText(['33']);
numberToText(['44']);
numberToText(['55']);
numberToText(['66']);
numberToText(['77']);
numberToText(['88']);
numberToText(['99']);
numberToText(['100']);