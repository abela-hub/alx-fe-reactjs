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
