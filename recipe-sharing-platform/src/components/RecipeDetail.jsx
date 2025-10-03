import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json"; // import mock data

function RecipeDetail() {
    const { id } = useParams(); // get recipe ID from URL
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const foundRecipe = recipesData.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
    }, [id]);

    if (!recipe) {
        return <p className="text-center mt-10">Recipe not found</p>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <Link
                to="/"
                className="text-blue-600 hover:text-blue-800 font-medium mb-6 inline-block"
            >
                ← Back to Home
            </Link>

            <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
                {/* Recipe Image */}
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-64 object-cover rounded-md mb-6"
                />

                {/* Recipe Title */}
                <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

                {/* Recipe Summary */}
                <p className="text-gray-700 mb-4">{recipe.summary}</p>

                {/* Ingredients */}
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        {recipe.ingredients?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Instructions */}
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
                    <ol className="list-decimal list-inside text-gray-700">
                        {recipe.instructions?.map((step, index) => (
                            <li key={index} className="mb-1">
                                {step}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default RecipeDetail;
