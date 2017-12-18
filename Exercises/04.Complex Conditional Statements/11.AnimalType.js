function animalType([animal]) {
    animal = animal.toString();
    switch (animal) {
        case 'dog':
            console.log('mammal');
            break;
        case 'crocodile':
        case 'tortoise':
        case 'snake':
            console.log('reptile');
            break;

        default:
            console.log('unknown');
            break;
    }
}

animalType(['dog']);
animalType(['crocodile']);
animalType(['snake']);
animalType(['cat']);