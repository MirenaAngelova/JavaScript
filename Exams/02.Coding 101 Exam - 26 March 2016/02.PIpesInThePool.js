function pipesInThePool([v, p1, p2, h]) {
    v = parseInt(v);
    p1 = parseInt(p1);
    p2 = parseInt(p2);
    h = parseFloat(h);

    let volume = (p1 + p2) * h;
    if (volume <= v) {
        let v1 = parseInt(p1 * h / volume * 100);
        let v2 = parseInt(p2 * h / volume * 100);
        let v3 = parseInt(volume / v * 100);

        console.log(`The pool is ${v3}% full. Pipe 1: ${v1}%. Pipe 2: ${v2}%.`);
    } else {
        let overflow = (volume - v).toFixed(1);
        console.log(`For ${h} hours the pool overflows with ${overflow} liters.`)
    }
}

pipesInThePool(['1000', '100', '120', '3']);
pipesInThePool(['100', '100', '100', '2.5']);