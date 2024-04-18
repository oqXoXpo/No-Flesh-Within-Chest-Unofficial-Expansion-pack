function ChargingRecipe(input, result) {
    this.type = 'createaddition:charging'
    this.input = input
    this.result = result
}

ChargingRecipe.prototype = {
    setEnergy: function (energy) {
        this.energy = energy
        return this
    },
    maxChargeRate: function (maxChargeRate) {
        this.maxChargeRate = maxChargeRate
        return this
    },
}

ServerEvents.recipes(event => {
    function registerCustomRecipe(recipeModel) {
        event.custom(recipeModel)
    }

    registerCustomRecipe(new ChargingRecipe(Item.of('modlc:mechanical_core'), Item.of('modlc:mechanical_core')).setEnergy(1000000).maxChargeRate(50000))

})