/**
 * 快速注册材料
 * @param {string} material 
 * @param {string} category
 * @returns
 */
function MaterialsRegistry(material, category) {
    this.key = material.split(':')[1]
    this.category = category
    this.primary = 0
    this.secondary = 0
    this.tertiary = 0
    this.durability = 0
    this.magicCapacity = 0
    this.integrityCost = 0
    this.integrityGain = 0
    this.toolLevel = 0
    this.toolEfficiency = 0
    this.tints = {}
    this.textures = []
    this.effects = {}
    this.attributes = {}
    this.improvements = {}
    this.material = {}
    this.requiredTools = {}
    if (material.substring(0, 1) == '#') {
        this.material['tag'] = material.substring(1)
    } else {
        this.material['items'] = [material]
    }
}

MaterialsRegistry.prototype = {
    setBasic: function (primary, secondary, tertiary, durability, magicCapacity) {
        this.primary = primary
        this.secondary = secondary
        this.tertiary = tertiary
        this.durability = durability
        this.magicCapacity = magicCapacity
        return this
    },
    setIntegrity: function (integrityCost, integrityGain) {
        this.integrityCost = integrityCost
        this.integrityGain = integrityGain
        return this
    },
    setTool: function (toolLevel, toolEfficiency) {
        this.toolLevel = toolLevel
        this.toolEfficiency = toolEfficiency
        return this
    },
    setTints: function (color1, color2) {
        this.tints['glyph'] = color1
        this.tints['texture'] = color2
        return this
    },
    setRequiredTools: function (tool, value) {
        this.requiredTools[tool] = value
        return this
    },
    addTextures: function (textures) {
        this.textures.push(textures)
        return this
    },
    addEffects: function (effect, value) {
        this.effects[effect] = value
        return this
    },
    addAttributes: function (attribute, value) {
        this.attributes[attribute] = value
        return this
    },
    addImprovements: function (improvement, value) {
        this.improvements[improvement] = value
        return this
    },
}


ServerEvents.highPriorityData(event => {
    function registerMaterials(registryModel) {
        let key = registryModel.key
        let category = registryModel.category
        event.addJson(`tetra:materials/${category}/${key}.json`, registryModel)
    }
    // bone - 骨头
    registerMaterials(new MaterialsRegistry('kubejs:leviathan_rib','bone')
        .setBasic(5, 1.9, 4.5, 120, 108)
        .setIntegrity(1, 5)
        .setTool(3, 4.5)
        .setTints('bone_glyph', 'bone')
        .setRequiredTools('hammer_dig', 1)
        .addTextures('bone')
        .addTextures('crude')
        .addEffects('bleeding', 1)
        // .addEffects('shieldbreaker', 3)
        .addImprovements('arrested', 0)
    )
    
    
    // fabric - 布料

    // fibre - 纤维

    // gem - 宝石

    // metal - 金属

    // misc - 杂项

    // reagent - 试剂

    // scale - 鳞片

    // skin - 皮革

    // socket - 插槽

    // stone - 石头

    // wood - 木材

})