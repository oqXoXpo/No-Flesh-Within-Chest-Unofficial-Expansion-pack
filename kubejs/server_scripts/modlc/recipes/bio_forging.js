ServerEvents.highPriorityData(event => {
    function registerCustomRecipe(recipeModel) {
        let id = recipeModel.result.id.toString()
        let item = id.split(':')[1]
        event.addJson(`kubejs:recipes/bio_forging/${item}.json`, recipeModel)
    }

    
});