ServerEvents.recipes(event => {
    function registerCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }

    registerCustomRecipe(new GoetyRitualRecipe('sky', [Ingredient.of('irons_spellbooks:magic_cloth'), Ingredient.of('irons_spellbooks:magic_cloth'), Ingredient.of('minecraft:string'), Ingredient.of('irons_spellbooks:magic_cloth')], Item.of('minecraft:sunflower'), Item.of('modlc:sunny_dolls')).setSoulCost(1000))
    
})