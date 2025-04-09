const BASE_URL = 'http://localhost:5000/api';

export const fetchRecipes = async () => {
  const response = await fetch(`${BASE_URL}/recipes`);
  return response.json();
};
