<div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        🍳 Recipe Sharing Platform
    </h1>

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
            <div
                key={recipe.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover"
