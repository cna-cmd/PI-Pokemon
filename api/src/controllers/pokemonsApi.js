const axios = require('axios')
const { POKEMON_URL } = require('../utils/constants')

const pokemonsApi = async () => {

    const urlOne = await axios.get(POKEMON_URL);
    const urlTwo = await axios.get(urlOne.data.next);
    const resultsUrl = urlOne.data.results.concat(urlTwo.data.results);

    try {
        const subConsult = resultsUrl.map(e => axios.get(e.url))
        let resultSubConsult = Promise.all(subConsult)
            .then(e => {
                let resPokemon = e.map(e => e.data)
                let pokemons = []
                resPokemon.map(e => {
                    pokemons.push({
                        id: e.id,
                        name: e.name,
                        hp: e.stats[0].base_stat,
                        attack: e.stats[1].base_stat,
                        defense: e.stats[2].base_stat,
                        speed: e.stats[5].base_stat,
                        height: e.height,
                        weight: e.weight,
                        sprite: e.sprites.other.dream_world.front_default,
                        types: e.types.length < 2 ? [{ name: e.types[0].type.name }] : [{ name: e.types[0].type.name }, { name: e.types[1].type.name }]
                    })
                })
                return pokemons
            })
        return resultSubConsult
    } catch (err) {
        console.log(err)
    }

}

module.exports = pokemonsApi;