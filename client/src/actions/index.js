import axios from 'axios';
import { maxPower, MinPower, orderAZ, orderZA } from '../controllers/filter';
import { GET_POKEMONS, GET_DATA, GET_POKEMONSAPI, GET_POKEMONSDB, GET_TYPE } from '../utils/constants';

export const GET_DISPLAYS = 'GET_DISPLAYS'
export const GET_POKEMON = 'GET_POKEMON'
export const GET_POKEMONDB = 'GET_POKEMONDB'
export const GET_POKEMONAPI = 'GET_POKEMONAPI'
export const GET_DATAS = 'GET_DATA'
export const GET_TYPES = 'GET_TYPE'

export const getPokemons = () => {
    return (dispatch) => {
        axios.get(GET_POKEMONS)
            .then(res => { dispatch({ type: GET_POKEMON, payload: res.data }) })
    }
}

export const getPokemonsDB = () => {
    return (dispatch) => {
        axios.get(GET_POKEMONSDB)
            .then(res => { dispatch({ type: GET_POKEMONDB, payload: res.data }) })
    }
}

export const getPokemonsAPI = () => {
    return (dispatch) => {
        axios.get(GET_POKEMONSAPI)
            .then(res => { dispatch({ type: GET_POKEMONAPI, payload: res.data }) })
    }
}

export const getType = () => {
    return (dispatch) => {
        axios.get(GET_TYPE)
            .then(res => { dispatch({ type: GET_TYPES, payload: res.data }) })
    }
}

export const getDisplay = (payload) => {
    return (dispatch) => dispatch({ type: GET_DISPLAYS, payload: payload })
}

export const clearState = (payload) => {
    return (dispatch) => dispatch({ type: GET_DISPLAYS, payload: payload })
}


export const getdata = (id) => {
    return (dispatch) => {
        axios.get(`${GET_DATA}${id}`)
            .then(res => { dispatch({ type: GET_DATAS, payload: res.data }) })
            .catch(error => {
                if (error.response?.status) {
                    if (error.response.status === 404) {
                        dispatch({ type: GET_DATAS, payload: null })
                    }
                }
            })
    }
}

export const clearPage = () => {
    return { type: GET_DATAS, payload: undefined }
}

export const filterAz = (array) => {
    const result = orderAZ(array)
    const index = result.slice(0, 12)
    return { type: GET_DISPLAYS, payload: [index] }
}

export const filterZa = (array) => {
    const result = orderZA(array)
    const index = result.slice(0, 12)
    return { type: GET_DISPLAYS, payload: [index] }
}

export const filterMinPower = (array) => {
    const result = MinPower(array)
    const index = result.slice(0, 12)
    return { type: GET_DISPLAYS, payload: [index] }
}

export const filterMaxPower = (array) => {
    const result = maxPower(array)
    const index = result.slice(0, 12)
    return { type: GET_DISPLAYS, payload: [index] }
}


