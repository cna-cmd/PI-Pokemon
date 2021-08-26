import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import style from './Search.module.css'

export const Search = () => {

    const name = useSelector(state => state.totalpokemons)
    const { push } = useHistory()
    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = name[0].find(e => e.name.toLowerCase() === search.toLowerCase())
        result ? push(`/Home/data/${result.id}`) : push(`/Home/data/error`);
        setSearch('');
    }

    return (
        <div className={style.container} >
            <input autoComplete='off' type='text' value={search} name='search' placeholder={'Search pokemon'} className={style.Input} onChange={handleChange} />
            {
                name[0] ? <button className={style.Button} onClick={handleSubmit} type='submit'>Search</button > : <button className={style.Button}>Search</button>
            }
        </div>
    )
}
