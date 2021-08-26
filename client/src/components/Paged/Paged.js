import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearState, getDisplay } from '../../actions/index';
import style from './Paged.module.css';

export const Paged = () => {

    const state = useSelector(state => state.totalpokemons);
    const dispatch = useDispatch();


    //-----------------DIFFERENT PAGED--------------//

    if (state.length !== 0) {
        var pokemon = state[0].slice(0, 12)
        var pokemon2 = state[0].slice(12, 24)
        var pokemon3 = state[0].slice(24, 36)
        var pokemon4 = state[0].slice(36, 48)
    }

    //---------------FUNCTION BUTTON------------//

    const handlePage = () => {
        dispatch(clearState())
        dispatch(getDisplay([pokemon]))

    }
    const handlePage2 = () => {
        dispatch(clearState())
        dispatch(getDisplay([pokemon2]))

    }
    const handlePage3 = () => {
        dispatch(clearState())
        dispatch(getDisplay([pokemon3]))

    }
    const handlePage4 = () => {
        dispatch(clearState())
        dispatch(getDisplay([pokemon4]))

    }

    return (
        <div className={style.Pagination}>
            <label>PAGES:   </label>
            <button onClick={() => handlePage()} className={style.button}>1</button>
            <button onClick={() => handlePage2()} className={style.button}>2</button>
            <button onClick={() => handlePage3()} className={style.button}>3</button>
            <button onClick={() => handlePage4()} className={style.button}>4</button>
        </div>
    )
}
