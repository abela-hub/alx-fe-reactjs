import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        {/* Header / Navigation */}
        <header className="bg-white shadow-md py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              🍳 Recipe Sharing
            </Link>
            <nav>
              <Link
                to="/add-recipe"
                className="text-blue-600 hover:text-blue-800 font-medium ml-4"
              >
                ➕ Add Recipe
              </Link>
            </nav>
          </div>
        </header>

        {/* Routes */}
        <main className="py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/add-recipe" element={<AddRecipeForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
