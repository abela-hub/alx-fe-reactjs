// src/components/RecipeList.jsx
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
    const recipes = useRecipeStore((state) => state.recipes);

    return (
        <div>
            <h2>Recipes</h2>
            {recipes.length === 0 ? (
                <p>No recipes yet. Add one above!</p>
            ) : (
                recipes.map((recipe) => (
                    <div key={recipe.id} style={{ border: '1px solid #ddd', margin: '8px 0', padding: '12px', borderRadius: '6px' }}>
                        <h3 style={{ margin: '0 0 8px 0' }}>
                            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                        </h3>
                        <p style={{ margin: '0 0 8px 0' }}>{recipe.description}</p>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <Link to={`/recipes/${recipe.id}/edit`}>
                                <button>Edit</button>
                            </Link>
                            <DeleteRecipeButton recipeId={recipe.id} />
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default RecipeList;
