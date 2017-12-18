function voyage([budget, season]) {
    budget = parseFloat(budget);
    let campHotel = season == 'summer' ? 'Camp' : 'Hotel';


    if (budget <= 100) {
        console.log(`Somewhere in Bulgaria`);

        let sum = season == 'summer' ? 30 * budget / 100 : 70 * budget / 100;
        console.log(`${campHotel} - ${sum.toFixed(2)}`)

    } else if (budget > 100 && budget <= 1000) {
        console.log(`Somewhere in Balkans`);

        let sum = season == 'summer' ? 40 * budget / 100 : 80 * budget / 100;
        console.log(`${campHotel} - ${sum.toFixed(2)}`)
    } else {
        console.log(`Somewhere in Europe`);

        let sum = 90 * budget / 100;
        console.log(`Hotel - ${sum.toFixed(2)}`)
    }
}

voyage(['50', 'summer']);
voyage(['75', 'winter']);
voyage(['312', 'summer']);
voyage(['678.53', 'winter']);
voyage(['1500', 'summer']);