// src/components/RecipeDetails.jsx
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const recipe = useRecipeStore((state) =>
        state.recipes.find((r) => r.id === id)
    );

    if (!recipe) {
        return (
            <div>
                <p>Recipe not found.</p>
                <button onClick={() => navigate(-1)}>Go back</button>
            </div>
        );
    }

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            {/* Use recipe.id explicitly for routing */}
            <Link to={`/recipes/${recipe.id}/edit`}>
                <button>Edit</button>
            </Link>
            <DeleteRecipeButton recipeId={recipe.id} />
            <Link to="/"><button>Back to list</button></Link>
        </div>
    );
};

export default RecipeDetails;
