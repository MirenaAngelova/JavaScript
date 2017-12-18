function charityCampaign([days, confectioners, cakes, waffles, pancakes]) {
    days = Number(days);
    confectioners = Number(confectioners);
    cakes = Number(cakes);
    waffles = Number(waffles);
    pancakes = Number(pancakes);

    let sum = days * confectioners * (cakes * 45 + waffles * 5.8 + pancakes * 3.2);
    sum -= sum / 8;

    console.log(sum.toFixed(2));
}

charityCampaign(['20', '8', '14', '30', '16']);
charityCampaign(['131', '5', '9', '33', '46']);