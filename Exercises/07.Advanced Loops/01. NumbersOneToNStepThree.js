function oneToNStepThree(n) {
    let num = 1;
    while (n >= 1) {
        console.log(num);
        num += 3;
        n -= 3;
    }
}
// oneToNStepThree(10);
// oneToNStepThree(7);
// oneToNStepThree(15);
oneToNStepThree(20);