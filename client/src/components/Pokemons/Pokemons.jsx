import React from 'react';
import { useSelector } from 'react-redux';
import { Pokemon } from '../Pokemon/Pokemon';
import { Paged }from '../Paged/Paged';
import pikachu from '../../images/pikachu.gif';
import style from './Pokemons.module.css';

export const Pokemons = () => {
    const display = useSelector(state => state.displayPokemon);

    return (
        <div className={style.BODY}>
            <Paged />
            <div className={style.PokedexGrid}>
                {display.length === 0 ?
                    (<><div className={style.Loading}>
                        <img src={pikachu} alt='' className={style.IMAGEN} />
                    </div>
                    </>
                    ) :
                    display[0].map((e) => (
                        <div key={e.id}>
                            <Pokemon
                                name={e.name}
                                id={e.id}
                                img={e.sprite}
                                type={e.types}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
