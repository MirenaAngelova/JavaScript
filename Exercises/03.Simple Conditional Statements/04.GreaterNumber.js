function greaterNumber([n, m]) {
    n = Number(n);
    m = Number(m);
    let greaterNum = n > m ? n : m;

    console.log(greaterNum);
}

greaterNumber(['5', '3']);
greaterNumber(['3', '5']);
greaterNumber(['10', '10']);
greaterNumber(['-5', '5']);