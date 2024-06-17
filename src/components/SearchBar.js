import React, { useState, useEffect, useCallback } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const APP_ID = '87f82b5b';
const APP_KEY = '6f9614e43ff73f8480f856bdba5f3fa7';

export const SearchBar = ({ setRecipes }) => {
  const [query, setQuery] = useState('');

  const fetchRecipes = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRecipes(data.hits);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  }, [query, setRecipes]);

  useEffect(() => {
    if (query !== '') {
      fetchRecipes();
    }
  }, [query, fetchRecipes]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <TextField
      label="Search"
      value={query}
      onChange={handleChange}
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={fetchRecipes}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
