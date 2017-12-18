function stupidPasswordGenerator([n, l]) {
    n = Number(n);
    l = Number(l);
    let password = [];
    for (let a = 1; a <= n; a++) {

        for (let b = 1; b <= n; b++) {


            for (let c = 0; c < l; c++) {
                let chC = String.fromCharCode(c + 97);

                for (let d = 0; d < l; d++) {
                    let chD = String.fromCharCode(d + 97);

                    for (let e = Math.max(a, b) + 1; e <= n; e++) {

                        password.push(a.toString() + b.toString() + chC.toString() +
                            chD.toString() + e.toString());

                    }
                }
            }
        }
    }

    console.log(password.join(' '));
}

stupidPasswordGenerator(['2', '4']);
//stupidPasswordGenerator(['3', '1']);
//stupidPasswordGenerator(['3', '2']);
//stupidPasswordGenerator(['4', '2']);