function number100to200([n]) {
    n = Number(n);

    if (n < 100) {
        console.log('Less than 100');

    } else if (n >= 100 && n <= 200) {
        console.log('Between 100 and 200');

    } else {
        console.log('Greater than 200');
    }
}
number100to200(['95']);
number100to200(['120']);
number100to200(['210']);