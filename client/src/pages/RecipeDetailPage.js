import React from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetailPage() {
  const { id } = useParams(); // Retrieve recipe ID from URL
  return (
    <div>
      <h1>Recipe Details</h1>
      <p>Displaying details for recipe ID: {id}</p>
      {/* Fetch and display recipe data using the ID */}
    </div>
  );
}

export default RecipeDetailPage;
