import React, { useEffect, useState } from 'react';
import '../CompCss/Food.css'; // Import the CSS file

const Food = () => {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState('apples,flour,sugar');

  const fetchRecipes = async () => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your Spoonacular API key
    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=10&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes();
  };

  return (
    <div className="food-container">
      <h1>Find Recipes</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter ingredients (comma-separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="recipes-grid">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <p>
                Used Ingredients: {recipe.usedIngredientCount}, Missed Ingredients:{' '}
                {recipe.missedIngredientCount}
              </p>
            </div>
          ))
        ) : (
          <p>No recipes found. Try different ingredients!</p>
        )}
      </div>
    </div>
  );
};

export default Food;