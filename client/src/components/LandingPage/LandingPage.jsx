import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDisplay, getPokemons, getPokemonsAPI, getPokemonsDB, getType } from '../../actions/index';
import { useEffect } from 'react';
import style from './LandingPage.module.css';

export const LandingPage = () => {
    const dispatch = useDispatch();
    const pokemon = useSelector(state => state.totalpokemons);

    useEffect(() => {
        dispatch(getPokemons())
        dispatch(getPokemonsDB())
        dispatch(getPokemonsAPI())
        dispatch(getType())
    }, [dispatch])

    const render = pokemon.slice(0.12);

    const handleClick = () => {
        dispatch(getDisplay([render]))
    }
    return (
        <body className={style.Body}>
            <div className={style.Titulo}>
                <h1 className={style.H1}></h1>
            </div>
            <div className={style.container}>
                <NavLink exact to='/Home' ><button className={style.Boton} onClick={() => handleClick}>Start</button></NavLink>
            </div>
        </body>
    )
}