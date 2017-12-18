function invalidNumber([n]) {
    n = Number(n);
    if (n != 0 && n < 100 || n > 200) {
        console.log('invalid');
    }
}

invalidNumber(['75']);
invalidNumber(['150']);
invalidNumber(['220']);
invalidNumber(['199']);
invalidNumber(['-1']);
invalidNumber(['100']);
invalidNumber(['200']);
invalidNumber(['0']);