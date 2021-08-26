import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDisplay, getPokemons, getPokemonsAPI, getPokemonsDB, getType } from '../../actions/index';
import { Filter } from '../Filter/Filter';
import { Pokemons } from '../Pokemons/Pokemons';
import pikachu from '../../images/pikachu.gif';
import style from './Home.module.css';

export const Home = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.totalpokemons);
    if (state.length !== 0) {
        var index = state[0].slice(0, 12)
        dispatch(getDisplay([index]))
    }

    useEffect(() => {
        dispatch(getPokemonsAPI())
        /* dispatch(getPokemons()) */
        dispatch(getPokemonsDB())
        dispatch(getType())
    }, [])


    return (
        <div className={style.BODY}>
            {state && state.length === 0 ?
                <img src={pikachu} alt='' className={style.loading} />
                :
                <>
                    <div className={style.Pagination}>
                        <h1 className={style.pokedex}>
                            
                        </h1>
                        <div>
                            {
                                state.lenght === 0 ?
                                    <div>loading</div> :
                                    <Filter />
                            }
                        </div>
                    </div>
                    <Pokemons />
                </>
            }
        </div>
    )
}
