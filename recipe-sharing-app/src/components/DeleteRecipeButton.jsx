// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
    const navigate = useNavigate();

    const handleDelete = () => {
        const ok = window.confirm('Delete this recipe?');
        if (!ok) return;
        deleteRecipe(recipeId);
        // optional: if deleting from details page you'd want to navigate away
        // navigate('/');
    };

    return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteRecipeButton;
