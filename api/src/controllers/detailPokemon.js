const allPokemons = require('./allPokemons')

const detailPokemon = async (detail, response) => {
    const detailsPokemon = await allPokemons();
    //With GET_ID I filter by id and bring your data
    if (detail == 'GET_ID') {
        const result = detailsPokemon.find(e => e.id.toString() === response);
        return result;
    }
    //With GET_NAME I filter by name and bring your data
    if (detail == 'GET_NAME') {
        const result = detailsPokemon.find(e => e.name === response);
        return result;
    }
}

module.exports = detailPokemon