function numEndingIn7() {
    let last = '7';
    console.log(last);
    let num = 1
    while (num <= 99) {
        let numToStr = num.toString();
        console.log(numToStr + last);
        num++;
    }
}

numEndingIn7();