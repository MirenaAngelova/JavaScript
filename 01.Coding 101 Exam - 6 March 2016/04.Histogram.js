function histogram(arr) {
    let array = arr.map(Number);
    let n = array.shift();
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;


    for (let index = 0; index < array.length; index++) {
        if (array[index] < 200) {
            count1++;
        } else if (array[index] >= 200 && array[index] < 400) {
            count2++;
        } else if (array[index] >= 400 && array[index] < 600) {
            count3++;
        } else if (array[index] >= 600 && array[index] < 800) {
            count4++;
        } else if (array[index] >= 800) {
            count5++;
        }
    }

    p1 = (count1 / n * 100).toFixed(2);
    p2 = (count2 / n * 100).toFixed(2);
    p3 = (count3 / n * 100).toFixed(2);
    p4 = (count4 / n * 100).toFixed(2);
    p5 = (count5 / n * 100).toFixed(2);

    console.log(`${p1}%`);
    console.log(`${p2}%`);
    console.log(`${p3}%`);
    console.log(`${p4}%`);
    console.log(`${p5}%`);
}

//histogram(['20', '53', '7', '56', '180', '450', '920', '12', '7', '150', '250', '680', '2', '600', '200', '800', '799', '199', '46', '128', '65']);
//histogram(['3', '1', '2', '999']);
//histogram(['4', '53', '7', '56', '999']);
//histogram(['7', '800', '801', '250', '199', '399', '599', '799']);
//histogram(['9', '367', '99', '200', '799', '999', '333', '555', '111', '9']);
histogram(['14', '53', '7', '56', '180', '450', '920', '12', '7', '150', '250', '680', '2', '600', '200']);