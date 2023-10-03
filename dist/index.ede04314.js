const showRecipe = async function() {
    try {
        const res = await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886");
        const data = await res.json();
        console.log(res, data);
    } catch (err) {
        alert(err);
    }
};

//# sourceMappingURL=index.ede04314.js.map
