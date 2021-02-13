import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import Recipes from './Recipes';

const App = () => {
  const APP_ID = "c4f670f4";
  const APP_KEY = "c91ec9c22619f06e1e8bc7c07c28766d";
  const [query, setquery] = useState('paneer')
  const Request = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, [query])

  const [recipes, setrecipes] = useState([])
  const [search, setsearch] = useState('')
  
  const getRecipes = async () => {
    const response = await fetch(Request);
    const data = await response.json();
    setrecipes(data.hits);
  }
  const upDateSearch = events =>{
    setsearch(events.target.value);
  }
  const getSearch = () =>{
    if(search.trim()!=0)
    setquery(search);
    else
    alert('Please Enter valid Food Names')
    setsearch('');
  }
  return (
    <div className="App">
      <div className="intro">
        <h1>Ready To Cook 🍟 </h1>
        <div className="search">
          <input type="text" placeholder="Search Recipes Here" value={search} onChange={upDateSearch}/>
          <button onClick={getSearch} type="submit">GO</button>
        </div>
      </div>
      <div className="itemCards">
        {recipes.map(recipe => (
          <Recipes
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            calories={recipe.recipe.calories}
          />
        ))};
      </div>
    </div>
  );
}

export default App;
