function pets([days, food, dog, cat, tortoise]) {
    days = Number(days);
    food = Number(food);
    dog = parseFloat(dog);
    cat = parseFloat(cat);
    tortoise = parseFloat(tortoise);

    let eatenFood = days * (dog + cat + tortoise / 1000);

    let diff = eatenFood - food;
    if (diff <= 0) {
        console.log(`${Math.floor(Math.abs(diff))} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
    }
}

pets('2', '10', '1', '1', '1200');
pets('5', '10', '2.1', '0.8', '321');