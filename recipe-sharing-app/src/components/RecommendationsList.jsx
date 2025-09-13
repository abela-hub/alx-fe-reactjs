import { useRecipeStore } from '../store/recipeStore';
import { useEffect } from 'react';

const RecommendationsList = () => {
    const recommendations = useRecipeStore((state) => state.recommendations);
    const generateRecommendations = useRecipeStore(
        (state) => state.generateRecommendations
    );

    // Generate recommendations whenever component loads
    useEffect(() => {
        generateRecommendations();
    }, [generateRecommendations]);

    if (recommendations.length === 0) {
        return <p>No recommendations available. Add some favorites first!</p>;
    }

    return (
        <div>
            <h2>Recommended For You</h2>
            {recommendations.map((recipe) => (
                <div key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                </div>
            ))}
        </div>
    );
};

export default RecommendationsList;
