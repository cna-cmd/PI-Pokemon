import {GET_POKEMON, GET_DATAS, GET_POKEMONAPI,GET_POKEMONDB, GET_DISPLAYS, GET_TYPES } from '../actions/index'

const initialState = {
    displayPokemon: [],
    type: [],
    totalpokemons:[],
    pokemonsDB: [],
    pokemonsAPI: [],
    data: undefined,
};

function rootReducer(state = initialState, action) {
    if(action.type === GET_POKEMON){
        return {
            ...state,
            totalpokemons: [action.payload]
        }

    }
    if(action.type === GET_POKEMONDB){
        return {
            ...state,
            pokemonsDB: [action.payload]
        }

    }
    if(action.type === GET_TYPES){
        return {
            ...state,
            type: [action.payload]
        }

    }
    if(action.type === GET_POKEMONAPI){
        return {
            ...state,
            pokemonsAPI: [action.payload],
        }

    }
    if(action.type === GET_DISPLAYS){
        return {
            ...state,
            displayPokemon: action.payload
        }

    }
    if(action.type === GET_DATAS){
        return {
            ...state,
            data: action.payload
        }

    }
   
    return state
}

export default rootReducer;