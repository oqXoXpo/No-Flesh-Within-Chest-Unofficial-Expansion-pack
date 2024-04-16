function CuttingRecipe(ingredients, output) {
    this.type = 'farmersdelight:cutting'
    this.ingredients = ingredients
    this.result = output
    this.tool = { "tag": "forge:tools/knives" }
}

CuttingRecipe.prototype = {
    setTool: function (tool) {
        this.tool = tool
        return this
    }
}

ServerEvents.recipes(event => {
    function registerCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }

    
})

