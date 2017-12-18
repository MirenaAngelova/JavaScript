function gameOfIntervals(array) {
    let game = array.map(Number);
    let n = game.shift();
    let result = Number(0);
    let first = Number(0);
    let second = Number(0);
    let third = Number(0);
    let forth = Number(0);
    let fifth = Number(0);
    let sixth = Number(0);

    for (let g of game) {
        let num = parseInt(g / 10);
        if (g == 50) {
            result += 100;
            fifth++;
        } else {
            switch (num) {
                case 0:
                    result += g * 20 / 100;
                    first++;
                    break;
                case 1:
                    result += g * 30 / 100;
                    second++;
                    break;
                case 2:
                    result += g * 40 / 100;
                    third++;
                    break;
                case 3:
                    result += 50;
                    forth++;
                    break;
                case 4:
                    result += 100;
                    fifth++;
                    break;
                default:
                    result /= 2;
                    sixth++;
                    break;
            }
        }
    }

    first = first * 100 / n;
    second = second * 100 / n;
    third = third * 100 / n;
    forth = forth * 100 / n;
    fifth = fifth * 100 / n;
    sixth = sixth * 100 / n;

    console.log(result.toFixed(2));
    console.log(`From 0 to 9: ${first.toFixed(2)}%`);
    console.log(`From 10 to 19: ${second.toFixed(2)}%`);
    console.log(`From 20 to 29: ${third.toFixed(2)}%`);
    console.log(`From 30 to 39: ${forth.toFixed(2)}%`);
    console.log(`From 40 to 50: ${fifth.toFixed(2)}%`);
    console.log(`Invalid numbers: ${sixth.toFixed(2)}%`);
}

gameOfIntervals(['10', '43', '57', '-12', '23', '12', '0', '50', '40', '30', '20']);