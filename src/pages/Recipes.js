import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/recipes") // API to fetch recipes
      .then((res) => setRecipes(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="recipes-container">
      <h2>Our Recipes</h2>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
           
        ))}
      </div>
    </div>
  );
};

export default Recipes;