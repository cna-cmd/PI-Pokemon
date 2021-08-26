import { Link } from 'react-router-dom';
import style from './Pokemon.module.css';

export const Pokemon = ({ name, id, img, type }) => {

    return (
        <div className={style.pokemonCard} >
            <div className={style.pokemonImgConteiner} >
                <img className={style.pokemonImg} src={img} alt={name} />
            </div>
            <div className={style.cardBody}>
                <div className={style.cardTop}>
                    {<Link to={`/Home/data/${id} `}><p>{name}</p></Link>}
                </div>
                <div className={style.typeTitle}>
                    type:
                </div>
                <div className={style.pokemonType}>
                    {type.map((e) => (
                        <div className={style.pokemonTypeText} key={e.id}>{e.name} </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}
