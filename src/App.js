import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { SearchBar } from './components/SearchBar';
import { RecipesList } from './components/RecipesList';

function App() {
  const [recipes, setRecipes] = useState([]);

  return (
    <div className="App">
      <Header />
      <SearchBar setRecipes={setRecipes} />
      <RecipesList recipes={recipes} />
    </div>
  );
}

export default App;
