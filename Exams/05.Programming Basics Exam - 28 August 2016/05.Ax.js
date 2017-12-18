function ax([n]) {
    n = Number(n);


    for (let i = 0; i < n; i++) {
        console.log('-'.repeat(3 * n) + '*' + '-'.repeat(i) + '*' + '-'.repeat(2 * n - 2 - i));
    }

    for (let i = 0; i < parseInt(n / 2); i++) {
        console.log('*'.repeat(3 * n + 1) + '-'.repeat(n - 1) + '*' + '-'.repeat(n - 1));
    }

    for (let i = 0; i < parseInt(n / 2); i++) {

        if (n != 2 && i != parseInt(n / 2) - 1) {
            console.log('-'.repeat(3 * n - i) + '*' + '-'.repeat(n - 1 + 2 * i) +
                '*' + '-'.repeat(n - 1 - i));

        } else if (i == parseInt(n / 2) - 1) {

            console.log('-'.repeat(3 * n - i) + '*'.repeat(n - 1 + 2 * i + 2) +
                '-'.repeat(n - 1 - i));
        }
    }
}

ax(['2']);
ax(['5']);
ax(['8']);