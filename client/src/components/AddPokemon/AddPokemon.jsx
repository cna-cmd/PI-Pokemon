import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getPokemons } from '../../actions/index';
import { GET_POKEMONS } from '../../utils/constants';
import icon from '../../images/icon.png';
import style from './AddPokemon.module.css';

export const AddPokemon = () => {
    const dispatch = useDispatch()
    const { push } = useHistory()
    const TYPES = useSelector(state => state.type)
    const [type, setType] = useState([])
    const [input, setInput] = useState({
        name: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        sprite: '',
        type: []
    });

    function handleChange(e) {
        setInput(values => ({
            ...values,
            [e.target.name]: e.target.value
        }))
    }
    function handleChangeType(e) {
        setType(values => ([
            ...values,
            e.target.value
        ]))
        setInput(values => ({
            ...values,
            [e.target.name]: [...type, e.target.value]
        }))
    }
    function resetType(e) {
        setType([])
        setInput(values => ({
            ...values,
            [e.target.name]: []
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(GET_POKEMONS, input)
            .then(res => {
                dispatch(getPokemons)
                push(`/Home/data/${res.data.id}`)
            })

    }

    return (
        <div className={style.container}>
            <div className={style.Form}>
                <form onSubmit={handleSubmit} >
                    <div className={style.containerInput}>
                        <label htmlFor='Name'>Name:</label>
                        <div >
                            <input onChange={handleChange} type='text' name='name' className={style.Inputs} autoComplete='off' required />
                        </div>
                    </div>
                    <div className={style.containerInput}>
                        <label htmlFor='HP'>HP:</label>
                        <div>
                            <input onChange={handleChange} type='number' name='hp' className={style.Inputs} />
                        </div>
                    </div >
                    <div className={style.containerInput}>
                        <label htmlFor='Attack'>Attack:</label>
                        <div>
                            <input onChange={handleChange} type='number' name='attack' className={style.Inputs} />
                        </div>
                    </div>
                    <div className={style.containerInput}>
                        <label htmlFor='Defense'>Defense:</label>
                        <div>
                            <input onChange={handleChange} type='number' name='defense' className={style.Inputs} />
                        </div>
                    </div>
                    <div className={style.containerInput}>
                        <label htmlFor='Speed'>Speed:</label>
                        <div>
                            <input onChange={handleChange} type='number' name='speed' className={style.Inputs} />
                        </div>
                    </div>
                    <div className={style.containerInput}>
                        <label htmlFor='height'>Height:</label>
                        <div>
                            <input onChange={handleChange} type='number' name='height' className={style.Inputs} />
                        </div>
                    </div>
                    <div className={style.containerInput}>
                        <label htmlFor='weight'>weight:</label>
                        <div>
                            <input onChange={handleChange} type='number' name='weight' className={style.Inputs} />
                        </div>
                    </div>
                    <div className={style.containerInput}>
                        <label htmlFor='sprite'>Sprite:</label>
                        <div>
                            <input onChange={handleChange} type='text' name='sprite' className={style.Inputs} />
                        </div>
                    </div>
                    <div className={style.containerButon}>
                        {input.type.length > 2 ?
                            <p>You can only choose two types of pokemons</p> :
                            <>
                                <label htmlFor='type'>Type:  </label>
                                <select name='type' onChange={handleChangeType} className={style.BUTON}>
                                    <option>Select...</option>
                                    {
                                        TYPES.length === 0 ?
                                            <option>loading...</option>
                                            :
                                            TYPES[0].map(e => {
                                                return <option value={e.id} name='Normal' /* id={1} */>{e.name}</option>
                                            })
                                    }
                                </select>
                            </>
                        }
                    </div>
                    {input.type.length > 2 ?
                        <>
                            <p className={style.containerButon}>Select two types of pokemons</p>
                        </>
                        :
                        <div className={style.containerButon}>
                            <img src={icon} width='30' height='30' alt='' />
                            <button className={style.PushButon}>Add Pokemon</button>
                        </div>

                    }
                </form>
                {
                    input.type.length > 2 ?
                        <>
                            <div className={style.containerButon}>
                                <button onClick={resetType} name='type' className={style.BUTON}>Reset</button>
                            </div>
                        </>
                        : null
                }
            </div>
        </div>
    )
}
