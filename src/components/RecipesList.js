import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)`
  height: 100%;
`;

export const RecipesList = ({ recipes }) => {
  return (
    <Grid container spacing={3}>
      {recipes.map((recipe, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <StyledCard>
            <CardMedia
              component="img"
              height="140"
              image={recipe.recipe.image}
              alt={recipe.recipe.label}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {recipe.recipe.label}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {recipe.recipe.ingredientLines.join(', ')}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Calories: {Math.round(recipe.recipe.calories)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Source: {recipe.recipe.source}
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};
