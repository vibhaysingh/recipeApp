import React from 'react'
import './Recipes.css'
const Recipes = ({title, image, ingredients,calories}) => {
    return (
        <div className="cards">
            <h1 className="title">{title}</h1>
            <img src={image} alt="" />
            <h3 className="calories">Calories : <span>{Math.ceil(calories)} kcal</span></h3>
            <h2 className="items">Ingredients Required</h2>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default Recipes
