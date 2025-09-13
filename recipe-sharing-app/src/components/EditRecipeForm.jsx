// src/components/EditRecipeForm.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const recipe = useRecipeStore((state) => state.recipes.find((r) => r.id === id));
    const updateRecipe = useRecipeStore((state) => state.updateRecipe);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (recipe) {
            setTitle(recipe.title);
            setDescription(recipe.description);
        }
    }, [recipe]);

    if (!recipe) {
        return <p>Recipe not found.</p>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const t = title.trim();
        const d = description.trim();
        if (!t || !d) return;

        updateRecipe({ id, title: t, description: d });
        navigate(`/recipes/${id}`);
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: '16px 0' }}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Recipe Title"
                style={{ display: 'block', marginBottom: '8px', padding: '8px', width: '100%' }}
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Recipe Description"
                rows={6}
                style={{ display: 'block', marginBottom: '8px', padding: '8px', width: '100%' }}
            />
            <button type="submit">Save</button>
            <button type="button" onClick={() => navigate(-1)} style={{ marginLeft: '8px' }}>Cancel</button>
        </form>
    );
};

export default EditRecipeForm;
