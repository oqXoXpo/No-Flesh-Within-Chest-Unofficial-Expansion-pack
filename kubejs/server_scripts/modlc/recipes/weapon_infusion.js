function WeaponInfusionRecipe(base, addition, output) {
    this.type = 'cataclysm:weapon_fusion'
    this.base = base
    this.addition = addition
    this.result = output
}

ServerEvents.recipes(event => {
    function registerCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }

    
})