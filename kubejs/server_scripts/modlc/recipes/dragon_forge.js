function DragonForgeRecipe(input, blood, output, dragonType) {
    this.type = 'iceandfire:dragonforge'
    this.input = input
    this.blood = blood
    this.result = output
    this.dragon_type = dragonType
    this.cook_time = 1000
}

DragonForgeRecipe.prototype = {
    setCookTime: function (cookTime) {
        this.cook_time = cookTime
        return this
    },

}

ServerEvents.recipes(event => {
    function registerCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }

    
})