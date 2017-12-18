function smallShop([product, city, quantity]) {
    product = product.toString().substring(0, 1);
    city = city.toString().substring(0, 1);
    quantity = Number(quantity);

    if (city == 'S') {

        switch (product) {

            case 'c':
                quantity *= 0.50;
                break;
            case 'w':
                quantity *= 0.80;
                break;
            case 'b':
                quantity *= 1.20;
                break;
            case 's':
                quantity *= 1.45;
                break;
            case 'p':
                quantity *= 1.60;
                break;
        }
    } else if (city == 'P') {

        switch (product) {

            case 'c':
                quantity *= 0.40;
                break;
            case 'w':
                quantity *= 0.70;
                break;
            case 'b':
                quantity *= 1.15;
                break;
            case 's':
                quantity *= 1.30;
                break;
            case 'p':
                quantity *= 1.50;
                break;
        }
    } else {
        switch (product) {

            case 'c':
                quantity *= 0.45;
                break;
            case 'w':
                quantity *= 0.70;
                break;
            case 'b':
                quantity *= 1.10;
                break;
            case 's':
                quantity *= 1.35;
                break;
            case 'p':
                quantity *= 1.55;
                break;
        }
    }
    console.log(quantity);
}

smallShop(['coffee', 'Varna', '2']);
smallShop(['peanuts', 'Plovdiv', '1']);
smallShop(['beer', 'Sofia', '6']);
smallShop(['water', 'Plovdiv', '3']);
smallShop(['sweets', 'Sofia', '2.23']);