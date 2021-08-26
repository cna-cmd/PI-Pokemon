const { Router } = require('express');
const allPokemons = require('../controllers/allPokemons');
const detailPokemon = require('../controllers/detailPokemon');
const addPokemon = require('../controllers/AddPokemon');
const pokemonsApi = require('../controllers/pokemonsApi');
const pokemonsDb = require('../controllers/pokemonsDb');

const router = Router()

router.get('/', async (req, res, next) => {
  const { name } = req.query;
  const result = await allPokemons();
  try {
    if (name) {
      let resultName = await detailPokemon('GET_NAME', name);
      if (resultName.length === 0) {
        return res.status(404).json('Pokemon not found');
      }
      return res.status(200).json(resultName);
    }
    return res.status(200).json(result);

  } catch (err) {
    return next(err)
  }
});

router.get('/API', async (req, res, next) => {
  const result = await pokemonsApi()
  try {
    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
})

router.get('/DB', async (req, res, next) => {
  const result = await pokemonsDb();
  try {
    return res.status(200).json(result)
  } catch (err) {
    next(err);
  }
})

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  const result = await detailPokemon('GET_ID', id);
  try {
    return res.json(result);
  } catch (err) {
    next(err);
  }
})


router.post('/', async (req, res, next) => {
  const { name, hp, attack, defense, speed, height, weight, sprite, type } = req.body;
  try {
    const result = await addPokemon(name, hp, attack, defense, speed, height, weight, sprite, type);
    res.send(result);
  } catch (err) {
    next(err);
  }
})

module.exports = router;
