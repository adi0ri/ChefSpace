import React, { useState } from 'react';

function CreateRecipePage() {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    photos: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    setRecipe({ ...recipe, photos: e.target.files[0] });
  };

  const handleSubmit = () => {
    console.log('Recipe submitted:', recipe);
    // API call to save the recipe
  };

  return (
    <div>
      <h1>Create a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Recipe Title"
          onChange={handleInputChange}
        />
        <textarea
          name="ingredients"
          placeholder="Ingredients"
          onChange={handleInputChange}
        />
        <textarea
          name="instructions"
          placeholder="Instructions"
          onChange={handleInputChange}
        />
        <input type="file" name="photos" onChange={handlePhotoUpload} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateRecipePage;
