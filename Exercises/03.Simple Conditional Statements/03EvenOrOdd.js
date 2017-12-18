function evenOrOdd([n]) {
    n = Number(n);
    let evenOdd = n % 2 == 0 ? 'even' : 'odd';
    console.log(evenOdd);
}

evenOrOdd(['2']);
evenOrOdd(['3']);
evenOrOdd(['25']);
evenOrOdd(['1024']);