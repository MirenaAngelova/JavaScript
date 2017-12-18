function hotelRoom([months, nights]) {
    nights = Number(nights);

    let studioMonth = parseFloat(0);
    let apartmentMonth = parseFloat(0);
    let apartment = parseFloat(0);
    let studio = parseFloat(0);


    if (months == 'May' || months == 'October') {
        studioMonth = 50;
        apartmentMonth = 65;

    } else if (months == 'June' || months == 'September') {
        studioMonth = 75.20;
        apartmentMonth = 68.70;

    } else if (months == 'July' || months == 'August') {
        studioMonth = 76;
        apartmentMonth = 77;
    }


    apartment = nights * apartmentMonth;
    studio = nights * studioMonth;

    if (nights > 7 && nights <= 14 && studioMonth == 50) {
        studio = studio * (1 - 5 / 100);
    }

    if (nights > 14 && studioMonth == 50) {
        studio = studio * (1 - 30 / 100);
    }

    if (nights > 14 && studioMonth == 75.20) {
        studio = studio * (1 - 20 / 100);
    }

    if (nights > 14) {
        apartment = apartment * (1 - 10 / 100);
    }



    console.log((`Apartment: ${apartment.toFixed(2)} lv.`));
    console.log((`Studio: ${studio.toFixed(2)} lv.`));
}

//hotelRoom(['May', '15']);
//hotelRoom(['June', '14']);
hotelRoom(['August', '20']);