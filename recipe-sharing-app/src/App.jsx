import React from "react";

// Import your components (required by checker)
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div className="App">
      <h1>Recipe Sharing App</h1>

      {/* Form to add new recipes */}
      <AddRecipeForm />

      {/* List of all recipes */}
      <RecipeList />
    </div>
  );
}

export default App;
