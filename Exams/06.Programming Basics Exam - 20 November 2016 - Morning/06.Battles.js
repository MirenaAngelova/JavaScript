function battles([pokemonsFirst, pokemonsSecond, maxBattles]) {
    pokemonsFirst = Number(pokemonsFirst);
    pokemonsSecond = Number(pokemonsSecond);
    maxBattles = Number(maxBattles);
    let pokemonBattles = [];

    let count = Number(1);
    for (let first = 1; first <= pokemonsFirst; first++) {

        for (let second = 1; second <= pokemonsSecond; second++) {

            if (count <= maxBattles) {

                /*  pokemonBattles.push('(');
                 pokemonBattles.push(first);
                 pokemonBattles.push(' ');
                 pokemonBattles.push('<->');
                 pokemonBattles.push(' ');
                 pokemonBattles.push(second);
                 pokemonBattles.push(')');
                 pokemonBattles.push(' '); */

                pokemonBattles.push(`(${first} <-> ${second})`);

            }
            count++;
        }
    }

    console.log(pokemonBattles.join(' '));
}

battles(['2', '2', '6']);
battles(['2', '2', '3']);
battles(['5', '8', '40']);