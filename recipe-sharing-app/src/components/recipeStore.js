import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
    recipes: [],
    favorites: [],
    recommendations: [],
    searchTerm: '',
    filteredRecipes: [],

    // Recipe Actions
    addRecipe: (newRecipe) =>
        set((state) => ({ recipes: [...state.recipes, newRecipe] })),

    deleteRecipe: (id) =>
        set((state) => ({
            recipes: state.recipes.filter((recipe) => recipe.id !== id),
            filteredRecipes: state.filteredRecipes.filter((recipe) => recipe.id !== id),
            favorites: state.favorites.filter((favId) => favId !== id),
        })),

    updateRecipe: (updatedRecipe) =>
        set((state) => ({
            recipes: state.recipes.map((recipe) =>
                recipe.id === updatedRecipe.id ? updatedRecipe : recipe
            ),
            filteredRecipes: state.filteredRecipes.map((recipe) =>
                recipe.id === updatedRecipe.id ? updatedRecipe : recipe
            ),
        })),

    // Search + Filtering
    setSearchTerm: (term) =>
        set((state) => {
            const filtered = state.recipes.filter((recipe) =>
                recipe.title.toLowerCase().includes(term.toLowerCase())
            );
            return { searchTerm: term, filteredRecipes: filtered };
        }),

    // Favorites
    addFavorite: (recipeId) =>
        set((state) => ({
            favorites: state.favorites.includes(recipeId)
                ? state.favorites
                : [...state.favorites, recipeId],
        })),

    removeFavorite: (recipeId) =>
        set((state) => ({
            favorites: state.favorites.filter((id) => id !== recipeId),
        })),

    // Recommendations (simple mock)
    generateRecommendations: () =>
        set((state) => {
            const recommended = state.recipes.filter(
                (recipe) =>
                    state.favorites.includes(recipe.id) && Math.random() > 0.5
            );
            return { recommendations: recommended };
        }),
}));
