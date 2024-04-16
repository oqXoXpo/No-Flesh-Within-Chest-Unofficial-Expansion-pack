function DryingRackRecipe(ingredients, output, dryingTimeInTicks) {
    this.type = 'hexerei:drying_rack'
    this.ingredients = ingredients
    this.output = output
    this.dryingTimeInTicks = dryingTimeInTicks
}

ServerEvents.recipes(event => {
    function registerCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }

    
})

