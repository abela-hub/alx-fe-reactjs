import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const recipe = useRecipeStore((state) =>
        state.recipes.find((r) => r.id === id)
    );
    const updateRecipe = useRecipeStore((state) => state.updateRecipe);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (recipe) {
            setTitle(recipe.title);
            setDescription(recipe.description);
        }
    }, [recipe]);

    if (!recipe) return <p>Recipe not found.</p>;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !description.trim()) return;
        updateRecipe({ id: recipe.id, title: title.trim(), description: description.trim() });
        navigate(`/recipes/${recipe.id}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Recipe Title"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Recipe Description"
            />
            <button type="submit">Save</button>
            <button type="button" onClick={() => navigate(-1)}>Cancel</button>
        </form>
    );
};

export default EditRecipeForm;
