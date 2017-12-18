function vacation([budget, season]) {
    budget = Number(budget);
    season = season.toString().substring(0, 1);

    let accommodation = '';
    let location = season == 'S' ? 'Alaska' : 'Morocco';

    if (budget <= 1000) {
        accommodation = 'Camp';
        budget = season == 'S' ? budget * 65 / 100 : budget * 45 / 100;

    } else if (budget > 1000 && budget <= 3000) {
        accommodation = 'Hut';
        budget = season == 'S' ? budget * 80 / 100 : budget * 60 / 100;

    } else {
        accommodation = 'Hotel';
        budget *= 90 / 100;
    }
    budget = Math.round(budget * 100) / 100;
    console.log(`${location} - ${accommodation} - ${budget.toFixed(2)}`);
}

vacation(['800', 'Summer']);
vacation(['799.50', 'Winter']);
vacation(['3460', 'Summer']);
vacation(['1100', 'Summer']);
vacation(['5000', 'Winter']);
vacation(['2543.99', 'Winter']);