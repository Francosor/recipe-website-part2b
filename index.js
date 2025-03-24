// This Express.js application is designed to serve as a recipe pages; uses EJS as the templating engine to generate HTML.
// I enhanced the code with help of Replit's built-in AI tools and ChatGPT that professor Debasis provided to double-check and meet project requirements, to provide suggestions on how to improve the code, and to make sure code was error-free. 
// Recipes are found in each indivisual link at the bottom there is a clickable link where they are sourced from. 
// Recipes retrieved on March 20, 2025

const express = require('express'); // Imports the Express.js framework.
const path = require('path');
const app = express(); // Creates an instance of the Express application.
const port = 3000; // Port number where the server will run

app.set('view engine', 'ejs'); // Configures Express to use EJS
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  // Defines a route for the root URL ('/').
  res.render('home');
});

app.get('/recipe1', (req, res) => {
  // Defines a route for '/recipe1'.
  const recipe1 = {
    // Defines an object containing the recipe details.
    title: "ZIPPY’S CHILI COPYCAT",
    ingredients: [
      "2 lbs ground beef",
      "1 can drained kidney beans",
      "1 can chili beans with sauce",
      "2 (14.5 oz) cans of diced tomatoes",
      "1 diced onion",
      "3 tbsp chili powder",
      "2 tsp garlic powder",
      "1 tsp cumin",
      "Salt and pepper to your liking"
    ],
    instructions: "1. Set Instant Pot to Sauté mode\n2. Make sure you brown the ground beef with onions\n3. Add all remaining ingredients and stir well\n4. Set to Manual/Pressure Cook for 15 minutes\n5. Release for 10 minutes\n.",
    servings: "6-8 servings",
    prepTime: "10 minutes",
    cookTime: "25 minutes"
  };
  res.render('recipe1', { recipe: recipe1 }); // Renders 'recipe1.ejs' with the recipe data.
});

app.get('/recipe2', (req, res) => {
  // Defines a route for '/recipe2'.
  const recipe2 = {
    // Defines an object containing the recipe details.
    title: "Classic Loco Moco",
    ingredients: [
      "2 cups white rice (cooked)",
      "1/2 lb ground beef",
      "2 large eggs",
      "1 cup beef gravy",
      "1 diced onion (small)",
      "Salt and pepper to your liking",
      "1 tbsp butter",
      "Green onions for garnish"
    ],
    instructions: "1. Form ground beef into 2 patties, season with salt and pepper\n2. Cook patties in a pan until cooked to your liking\n3. Sauté onions until translucent\n4. Prepare gravy according to package or make from scratch\n5. Fry eggs sunny side up\n6. Assemble: Rice on bottom, hamburger patty, fried egg, lastly pour hot gravy over top\n7. Garnish",
    servings: "2 servings",
    prepTime: "15 minutes",
    cookTime: "20 minutes"
  };
  res.render('recipe2', { recipe: recipe2 }); // Renders 'recipe2.ejs' with the recipe data.
});

app.get('/recipe3', (req, res) => {
  // Defines a route for '/recipe3'.
  const recipe3 = {
    // Defines an object containing the recipe details.
    title: "Hawaiian BBQ Chicken",
    ingredients: [
      "Marinade:",
      "1 cup pineapple juice",
      "1/2 cup soy sauce",
      "1/2 cup brown sugar",
      "1/3 cup ketchup",
      "4 minced garlic cloves",
      "1 tablespoon grated ginger",
      "1/4 teaspoon sesame oil",
      "Main:",
      "3 pounds bone-in chicken pieces",
      "2 cups cooked white rice for serving",
      "Green onions and sesame seeds"
    ],
    instructions: "1. Mix marinade ingredients in a bowl: pineapple juice, soy sauce, brown sugar, ketchup, minced garlic, grated ginger, and sesame oil\n2. Reserve 1 cup of marinade for basting\n3. Place chicken in a large bag and pour remaining marinade over it\n4. Seal bag and refrigerate for 4 to 8 hours\n5. Preheat grill to medium heat (350-375°F) and add oil to prepare\n6. Grill chicken for 35-40 minutes\n8. Baste with reserved marinade during last 10 minutes\n9. When the chickens internal temperature reaches 165°F, thats when you know your done\n10. Serve over rice, garnished to your liking",
    servings: "4 servings",
    prepTime: "15 minutes",
    cookTime: "1 hour"
  };
  res.render('recipe3', { recipe: recipe3 }); // Renders 'recipe3.ejs' with the recipe data.
});

app.use((req, res) => {

  res.status(404).send('404 Not Found'); 
});

app.listen(port, '0.0.0.0', () => {
  // Starts the server and sets to specific port
  console.log(`Server is running on http://0.0.0.0:${port}`); // Logs a message when the server starts.
});