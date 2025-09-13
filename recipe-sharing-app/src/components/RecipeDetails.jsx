// src/components/RecipeDetails.jsx
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const recipe = useRecipeStore((state) => state.recipes.find((r) => r.id === id));
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

    if (!recipe) {
        return (
            <div>
                <p>Recipe not found.</p>
                <button onClick={() => navigate(-1)}>Go back</button>
            </div>
        );
    }

    const handleDelete = () => {
        deleteRecipe(id);
        navigate('/');
    };

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>

            <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                <Link to={`/recipes/${id}/edit`}>
                    <button>Edit</button>
                </Link>
                <button onClick={handleDelete}>Delete</button>
                <Link to="/"><button>Back to list</button></Link>
            </div>
        </div>
    );
};

export default RecipeDetails;
