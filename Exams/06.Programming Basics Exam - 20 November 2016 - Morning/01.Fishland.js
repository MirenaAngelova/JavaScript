function fishland([mackerel, sprat, bonito, scad, clams]) {
    mackerel = parseFloat(mackerel);
    sprat = parseFloat(sprat);
    bonito = parseFloat(bonito);
    scad = parseFloat(scad);
    clams = parseInt(clams);

    let neededMoney = bonito * mackerel * (1 + 60 / 100) +
        scad * sprat * (1 + 80 / 100) + clams * 7.50;

    console.log(neededMoney.toFixed(2));
}

fishland(['6.90', '4.20', '1.5', '2.5', '1']);
fishland(['5.55', '3.57', '4.3', '3.6', '7']);
fishland(['7.79', '5.35', '9.3', '0', '0']);