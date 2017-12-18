function diamond([n]) {
    n = Number(n);
    let top = Math.ceil(n / 2);
    let bottom = top - 1;
    let count = Number(0);
    let i = Number(0);
    while (count < top + bottom) {
        let star = (count == 0 || count == top + bottom - 1) &&
            n % 2 == 1 ? 0 : 1;
        let dash = (count == 0 || count == top + bottom - 1) ||
            n % 2 == 0 ? 0 : 1;

        console.log('-'.repeat((n - star + dash - 1) / 2 - i) +
            '*' + '-'.repeat(Math.abs(2 * i - dash)) + '*'.repeat(star) +
            '-'.repeat((n - star + dash - 1) / 2 - i));
        if (count >= top - 1) {
            i--;
        } else {
            i++;
        }
        count++;
    }
}
diamond(['1']);
diamond(['2']);
diamond(['3']);
diamond(['4']);
diamond(['5']);
diamond(['6']);
diamond(['7']);
diamond(['8']);
diamond(['9']);