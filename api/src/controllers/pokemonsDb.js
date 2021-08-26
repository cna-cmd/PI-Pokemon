const { Pokemon, Type } = require('../db');

const pokemonsDb = async () => {

    const pokemonDb = await Pokemon.findAll({ include: Type });

    try {
        return pokemonDb
    } catch (err) {
        console.log(err);
    }
}

module.exports = pokemonsDb