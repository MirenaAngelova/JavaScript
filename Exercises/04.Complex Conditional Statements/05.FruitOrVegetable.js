function fruitOrVegetable([fruitVegetable]) {
    fruitVegetable = fruitVegetable.toString().substring(0, 2);
    switch (fruitVegetable) {
        case 'ba':
        case 'ap':
        case 'ki':
        case 'ch':
        case 'le':
        case 'gr':
            console.log('fruit');
            break;
        case 'to':
        case 'cu':
        case 'pe':
        case 'ca':
            console.log('vegetable');
            break;
        default:
            console.log('unknown');
            break;
    }
}

fruitOrVegetable(['banana']);
fruitOrVegetable(['apple']);
fruitOrVegetable(['tomato']);
fruitOrVegetable(['water']);