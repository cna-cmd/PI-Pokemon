import React from 'react'
import { NavLink } from 'react-router-dom';
import { Search } from '../Search/Search';
import iconGreen from '../../images/iconGreen.png';
import style from './NavBar.module.css';

export function NavBar() {

    return (
        <header className={style.container}>

            <nav>
                <ul className={style.List}>
                    <li className={style.ListItem}>
                        <NavLink exact to='/' ><img src={iconGreen} width='30' height='30' alt='' />Start</NavLink>
                        <NavLink exact to='/Home'><img src={iconGreen} width='30' height='30' alt='' />Home</NavLink>
                        <NavLink to='/Home/Add'><img src={iconGreen} width='30' height='30' alt='' />Create</NavLink>
                    </li>
                </ul>
            </nav>
            <div>
            </div>
            <div className={style.Search}>
                <div className={style.Searcher}>
                    {<Search />}
                </div>
            </div>
        </header>
    )
}