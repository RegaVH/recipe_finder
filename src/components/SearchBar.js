import React, { useState, useEffect, useCallback } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const APP_ID = '87f82b5b';
const APP_KEY = '6f9614e43ff73f8480f856bdba5f3fa7';

export const SearchBar = ({ setRecipes }) => {
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const fetchRecipes = useCallback(async () => {
    if (searchTerm === '') return;
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRecipes(data.hits);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  }, [searchTerm, setRecipes]);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    setSearchTerm(query);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <TextField
      label="Search"
      value={query}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
