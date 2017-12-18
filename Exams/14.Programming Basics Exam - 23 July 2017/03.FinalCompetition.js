function finalCompetition([dancers, points, season, place]) {

    dancers = Number(dancers);
    points = Number(points);
    season = season.toString().substring(0, 1);
    place = place.toString().substring(0, 1);
    let prize = points * dancers;

    if (place == 'B') {
        if (season == 's') {
            prize -= prize * 5 / 100;
        } else {
            prize -= prize * 8 / 100;
        }
    } else {
        prize += prize * 50 / 100;
        if (season == 's') {
            prize -= prize * 10 / 100;
        } else {
            prize -= prize * 15 / 100;
        }
    }

    let charity = prize * 75 / 100;
    prize -= prize * 75 / 100;
    let prizeDancer = prize / dancers;

    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${prizeDancer.toFixed(2)}`);
}

finalCompetition(['1', '89.5', 'summer', 'Abroad']);
finalCompetition(['25', '98', 'winter', 'Bulgaria']);