function rate() {
    let rating = document.getElementById('rating').value;
    if (rating > 100) {
        rating = 100;
    } else if (rating < 0) {
        rating = 0;
    }

    let fullStarsCount = Math.floor(rating / 10);
    let emptyStarsCount = Math.floor((100 - rating) / 10);
    let halfStarsCount = 10 - fullStarsCount - emptyStarsCount;

    let stars = document.getElementById('stars');
    let rate = '';
    for (let i = 0; i < fullStarsCount; i++) {
        rate += "<img src='./images/full.png' />";
    }

    for (let i = 0; i < halfStarsCount; i++) {
        rate += "<img src='./images/half.png' />";
    }

    for (let i = 0; i < emptyStarsCount; i++) {
        rate += "<img src='./images/empty.png' />";
    }
    stars.innerHTML = rate;
}