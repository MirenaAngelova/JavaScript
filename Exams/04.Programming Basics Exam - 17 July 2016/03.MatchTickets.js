function matchTickets([budget, vipNormal, people]) {
    budget = Number(budget);
    people = Number(people);

    let budgetWithoutTransport = Number(0);
    let categoryFirst = parseInt(people / 5);
    let categorySecond = parseInt(people / 25);

    if (categoryFirst == 0) {
        budgetWithoutTransport = budget * (1 - 75 / 100);

    } else if (categoryFirst == 1) {
        budgetWithoutTransport = budget * (1 - 60 / 100);

    } else if (categorySecond == 0) {
        budgetWithoutTransport = budget * (1 - 50 / 100);

    } else if (categorySecond == 1) {
        budgetWithoutTransport = budget * (1 - 40 / 100);

    } else {
        budgetWithoutTransport = budget * (1 - 25 / 100);
    }

    let price = vipNormal == 'VIP' ? 499.99 : 249.99;
    let totalPrice = Number(people * price);

    let diff = totalPrice - budgetWithoutTransport;
    if (diff > 0) {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);

    } else {
        console.log(`Yes! You have ${(Math.abs(diff)).toFixed(2)} leva left.`);
    }
}

matchTickets(['1000', 'Normal', '1']);
matchTickets(['30000', 'VIP', '49']);