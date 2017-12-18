function equalWords([wordFirst, wordSecond]) {
    wordFirst = wordFirst.toLowerCase();
    wordSecond = wordSecond.toLowerCase();
    if (wordFirst == wordSecond) {
        console.log('yes');
    } else {
        console.log('no');
    }
}
equalWords(['Hello', 'Hello']);
equalWords(['SoftUni', 'softuni']);
equalWords(['Soft', 'Uni']);
equalWords(['beer', 'vodka']);
equalWords(['HeLlO', 'hELLo']);