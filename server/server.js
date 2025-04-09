const express = require('express');
const cors = require('cors');
const recipeRoutes = require('./routes/recipes');
const userRoutes = require('./routes/users');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/recipes', recipeRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
