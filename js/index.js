const express = require('express');
const app = express();
const PORT = 3000;

// Basic route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to the Recommendation App!');
});

// Route for getting a recommendation
app.get('/recommend/:category', (req, res) => {
  const category = req.params.category;
  
  // Dummy recommendations for categories
  const recommendations = {
    books: [
      "To Kill a Mockingbird",
      "1984",
      "The Catcher in the Rye",
      "Pride and Prejudice"
    ],
    music: [
      "ye by burna boy",
      "tutu by some spanish kid",
      "un peu d amour par koba lad",
      "nanasara by Meddy"
    ],
   
    movies: [
      "Inception",
      "The Matrix",
      "The Godfather",
      "The Dark Knight"
    ]
  };

  // Number of recommendations (from query parameter, default is 1)
  const num = parseInt(req.query.num) || 1;

  // Get recommendations for the specified category or return a default message
  if (recommendations[category]) {
    const selectedRecommendations = recommendations[category].slice(0, num);
    res.send(`We recommend: ${selectedRecommendations.join(', ')}`);
  } else {
    res.send('No recommendations available for this category.');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
