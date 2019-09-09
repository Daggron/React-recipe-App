import React from 'react';
import style from './recipies.module.css';

const Recipie = ({title, image,calories,ingredients})=>{
    let i=0;
    return(
        <div className={style.recepie}>
            <h1>
                {title}
            </h1>
            <p>
                {calories}
            </p>
            <img src={image} alt="Chicken" />

            <ol>
                {ingredients.map(ingredient =>(
                    <li key={i++}>
                        {ingredient.text}
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Recipie;