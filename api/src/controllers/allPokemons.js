const pokemonsApi = require('./pokemonsApi');
const pokemonsDb = require('./pokemonsDb');

const allPokemons = async () => {
    const resultApi = await pokemonsApi();
    const resultDb = await pokemonsDb();
    const allPokemons = resultDb.concat(resultApi);
    return allPokemons;
}

module.exports = allPokemons;
