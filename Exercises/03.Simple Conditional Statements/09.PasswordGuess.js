function passwordGuess([word]) {
    word = word.toString();
    let password = 's3cr3t!P@ssw0rd';
    let lengthWord = word.length;
    let lengthPassword = password.length;

    if (lengthWord != lengthPassword) {
        console.log('Wrong password!');
        return;
    }

    for (let index in word) {

        if (word[index] == password[index]) {
            continue;
        } else {
            console.log('Wrong password!');
            return;
        }
    }

    console.log('Welcome');
}

passwordGuess(['qwerty']);
passwordGuess(['s3cr3t!P@ssw0rd']);
passwordGuess(['s3cr3t!p@ss']);