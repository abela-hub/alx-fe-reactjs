import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails"; // optional for details route
import EditRecipeForm from "./components/EditRecipeForm"; // optional for edit route

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Recipe Sharing App</h1>
        <Routes>
          {/* Home page: Add + List recipes */}
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />

          {/* Recipe details page */}
          <Route path="/recipes/:id" element={<RecipeDetails />} />

          {/* Edit recipe page */}
          <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
