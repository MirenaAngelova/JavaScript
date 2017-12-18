function trapezoidArea([arg1, arg2, arg3]) {
    let a = Number(arg1);
    let b = Number(arg2);
    let h = Number(arg3);

    let area = (a + b) / 2 * h;
    console.log(area);
}
trapezoidArea(['8', '13', '7']);