function BioBrewingRecipe(ingredients, reactant, output) {
    this.type = 'biomancy:bio_brewing'
    this.ingredients = ingredients
    this.result = output
    this.nutrientsCost = 2
    this.processingTime = 20 * 8
    this.reactant = reactant
}

BioBrewingRecipe.prototype = {
    setNutrientsCost: function (nutrientsCost) {
        this.nutrientsCost = nutrientsCost
        return this
    },
    setProcessingTime: function (processingTime) {
        this.processingTime = processingTime
        return this
    },
}

ServerEvents.recipes(event => {
    function registerCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }

    
})
