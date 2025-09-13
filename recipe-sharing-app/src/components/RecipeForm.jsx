import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const AddRecipeForm = () => {
    const addRecipe = useRecipeStore((state) => state.addRecipe);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!title.trim() || !description.trim()) return;

        addRecipe({
            id: Date.now(),
            title,
            description,
        });

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
                style={{ display: 'block', marginBottom: '8px', padding: '8px' }}
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Recipe Description"
                style={{ display: 'block', marginBottom: '8px', padding: '8px' }}
            />
            <button type="submit" style={{ padding: '8px 12px' }}>Add Recipe</button>
        </form>
    );
};

export default AddRecipeForm;
