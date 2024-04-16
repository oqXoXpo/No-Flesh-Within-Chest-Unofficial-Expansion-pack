function BioForgingRecipe(ingredients, output) {
    this.type = 'biomancy:bio_forging'
    this.ingredients = ingredients
    this.result = output
    this.nutrientsCost = 1
    this.bio_forge_tab = 'biomancy:misc'
}

BioForgingRecipe.prototype = {
    setNutrientsCost: function (nutrientsCost) {
        this.nutrientsCost = nutrientsCost
        return this
    },
    setTab: function (tab) {
        this.bio_forge_tab = tab
        return this
    },
}

ServerEvents.highPriorityData(event => {
    function registerCustomRecipe(recipeModel) {
        let id = recipeModel.result.id.toString()
        let item = id.split(':')[1]
        event.addJson(`kubejs:recipes/bio_forging/${item}.json`, recipeModel)
    }

    
});