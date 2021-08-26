const { Pokemon } = require('../db');

const AddPokemon = async (name, hp, attack, defense, speed, height, weight, sprite, type) => {

  try {
    const addPokemon = await Pokemon.create({
      name: name,
      hp: hp || 0,
      attack: attack || 0,
      defense: defense || 0,
      speed: speed || 0,
      height: height || 0,
      weight: weight || 0,
      sprite: sprite || 'https://th.bing.com/th/id/OIP.jfPjL8wUq9zvuGN4GICWXwHaEo?w=298&h=186&c=7&o=5&dpr=2.5&pid=1.7'
    },
    )
    if (type.length === 1) {
      await addPokemon.addType(type[0])
    } else {
      await addPokemon.addType(type[0])
      await addPokemon.addType(type[1])
    }
    return addPokemon
  } catch (err) {
    return { result: 'Verify the data entered' }
  }
}

module.exports = AddPokemon;
