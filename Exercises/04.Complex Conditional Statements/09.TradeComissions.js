function tradeComissions([city, s]) {
    city = city.toString().substring(0, 1);
    s = Number(s);
    if (0 <= s && s <= 500) {
        switch (city) {

            case 'S':
                s *= 5 / 100;
                break;
            case 'V':
                s *= 4.5 / 100;
                break;
            case 'P':
                s *= 5.5 / 100;
                break;
            default:
                console.log('error');
                return;
        }
    } else if (500 <= s && s <= 1000) {
        switch (city) {

            case 'S':
                s *= 7 / 100;
                break;
            case 'V':
                s *= 7.5 / 100;
                break;
            case 'P':
                s *= 8 / 100;
                break;
            default:
                console.log('error');
                return;
        }
    } else if (1000 <= s && s <= 10000) {
        switch (city) {

            case 'S':
                s *= 8 / 100;
                break;
            case 'V':
                s *= 10 / 100;
                break;
            case 'P':
                s *= 12 / 100;
                break;
            default:
                console.log('error');
                return;
        }
    } else if (s > 10000) {
        switch (city) {

            case 'S':
                s *= 12 / 100;
                break;
            case 'V':
                s *= 13 / 100;
                break;
            case 'P':
                s *= 14.5 / 100;
                break;
            default:
                console.log('error');
                return;
        }
    } else {
        console.log('error');
        return;
    }
    console.log(s.toFixed(2));
}

tradeComissions(['Sofia', '1500']);
tradeComissions(['Plovdiv', '499.99']);
tradeComissions(['Varna', '3874.50']);
tradeComissions(['Kaspichan', '-50']);