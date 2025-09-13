
// src/components/AddRecipeForm.jsx
import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
    const addRecipe = useRecipeStore((state) => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const t = title.trim();
        const d = description.trim();
        if (!t || !d) return;

        addRecipe({ id: Date.now().toString(), title: t, description: d });
        setTitle('');
        setDescription('');
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
                rows={4}
                style={{ display: 'block', marginBottom: '8px', padding: '8px', width: '100%' }}
            />
            <button type="submit" style={{ padding: '8px 12px' }}>Add Recipe</button>
        </form>
    );
};

export default AddRecipeForm;
