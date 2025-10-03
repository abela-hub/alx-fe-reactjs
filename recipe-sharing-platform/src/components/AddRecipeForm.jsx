import { useState } from "react";

function AddRecipeForm() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        const newErrors = {};
        if (!title.trim()) newErrors.title = "Title is required";
        if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
        if (!instructions.trim()) newErrors.instructions = "Instructions are required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Example: handle submitted data
        const newRecipe = {
            id: Date.now(),
            title,
            ingredients: ingredients.split("\n"), // convert textarea lines to array
            instructions: instructions.split("\n"),
            image: "https://via.placeholder.com/300x200", // placeholder image
            summary: ingredients.split("\n")[0] || "", // first line of ingredients as summary
        };

        console.log("New Recipe Submitted:", newRecipe);

        // Reset form
        setTitle("");
        setIngredients("");
        setInstructions("");
        setErrors({});
        alert("Recipe submitted successfully!");
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
                Add a New Recipe
            </h1>

            <form
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md"
            >
                {/* Title */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.title ? "border-red-500" : "border-gray-300"
                            }`}
                    />
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                </div>

                {/* Ingredients */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Ingredients</label>
                    <textarea
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        rows={4}
                        placeholder="Enter each ingredient on a new line"
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.ingredients ? "border-red-500" : "border-gray-300"
                            }`}
                    ></textarea>
                    {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
                </div>

                {/* Instructions */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Instructions</label>
                    <textarea
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        rows={4}
                        placeholder="Enter each step on a new line"
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.instructions ? "border-red-500" : "border-gray-300"
                            }`}
                    ></textarea>
                    {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Submit Recipe
                </button>
            </form>
        </div>
    );
}

export default AddRecipeForm;
