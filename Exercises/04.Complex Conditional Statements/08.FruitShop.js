function fruitShop([fruit, day, quantity]) {
    fruit = fruit.toString();
    day = day.toString().substring(0, 2);
    quantity = Number(quantity);
    let err = 'error';

    switch (day) {
        case 'Mo':
        case 'Tu':
        case 'We':
        case 'Th':
        case 'Fr':
            switch (fruit) {
                case 'banana':
                    quantity *= 2.50;
                    break;
                case 'apple':
                    quantity *= 1.20;
                    break;
                case 'orange':
                    quantity *= 0.85;
                    break;
                case 'grapefruit':
                    quantity *= 1.45;
                    break;
                case 'kiwi':
                    quantity *= 2.70;
                    break;
                case 'pineapple':
                    quantity *= 5.50;
                    break;
                case 'grapes':
                    quantity *= 3.85;
                    break;

                default:
                    console.log(err);
                    return;
            }
            break;

        case 'Sa':
        case 'Su':
            switch (fruit) {
                case 'banana':
                    quantity *= 2.70;
                    break;
                case 'apple':
                    quantity *= 1.25;
                    break;
                case 'orange':
                    quantity *= 0.90;
                    break;
                case 'grapefruit':
                    quantity *= 1.60;
                    break;
                case 'kiwi':
                    quantity *= 3.00;
                    break;
                case 'pineapple':
                    quantity *= 5.60;
                    break;
                case 'grapes':
                    quantity *= 4.20;
                    break;
                default:
                    console.log(err);
                    return;
            }
            break;
        default:
            console.log(err);
            return;
    }
    console.log(quantity.toFixed(2));
}

fruitShop(['apple', 'Tuesday', '2']);
fruitShop(['orange', 'Sunday', '3']);
fruitShop(['kiwi', 'Monday', '2.5']);
fruitShop(['grapes', 'Saturday', '0.5']);
fruitShop(['tomato', 'Monday', '0.5']);