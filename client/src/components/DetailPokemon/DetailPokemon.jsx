import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearPage, getdata, getPokemons } from '../../actions/index';
import { Link } from 'react-router-dom';
import icon from '../../images/icon.png';
import pikachu from '../../images/pikachu.gif';
import notFound from '../../images/notFound.gif';
import style from './DetailPokemon.module.css';

export const DetailPokemon = () => {
    const pokemon = useSelector(state => state.data);
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getdata(id));
        dispatch(getPokemons())
        return () => dispatch(clearPage())
    }, [id, dispatch])

    /* console.log(pokemon.sprite) */
    return (
        <div className={style.BODY}>
            {
                pokemon ? <>
                    <div className={style.container} key={pokemon.id}>
                        <div className={style.panel}>
                            <div className={style.Top}>
                                <h1 className={style.Title}>{pokemon.name}</h1>
                                <div className={style.containerIMG}>
                                    <img src={pokemon.sprite} className={style.pokemonImg}/* width='150' height='100' */ alt='' />
                                </div>
                            </div>
                            <div className={style.Medium}>
                                <div className={style.Data}>
                                    <p>HP</p>
                                    <p>{pokemon.hp}</p>
                                </div>
                                <div>
                                    <p>Attack</p>
                                    <p>{pokemon.attack}</p>
                                </div>
                                <div>
                                    <p>Defense</p>
                                    <p>{pokemon.defense}</p>
                                </div>
                                <div>
                                    <p>Speed</p>
                                    <p>{pokemon.speed}</p>
                                </div>
                                <div>
                                    <p>Height</p>
                                    <p>{pokemon.height}</p>
                                </div>
                                <div>
                                    <p>Weight</p>
                                    <p>{pokemon.weight}</p>
                                </div>
                            </div>
                            <p className={style.ID}>id:{pokemon.id}</p>
                            <div className={style.Bottom}>
                                <h2>Type:</h2>
                                <div>
                                    {
                                        pokemon.types.map(e => {
                                            return <h3 className={style.Type}>{e.name}</h3>
                                        })
                                    }
                                </div>
                            </div>
                            <div className={style.HOME}>
                                <img src={icon} alt='' width='15' height='20' className={style.loading} />
                                <Link to={'/Home'}><button className={style.BUTTON}>HOME</button></Link>

                            </div>
                        </div>
                    </div>
                </>
                    : pokemon === undefined ?
                        <img src={pikachu} alt='' className={style.loading} />
                        :
                        <>
                            <h1>Pokemon not found</h1>
                            <img src={notFound} alt='' />
                        </>
            }
        </div>
    )
}