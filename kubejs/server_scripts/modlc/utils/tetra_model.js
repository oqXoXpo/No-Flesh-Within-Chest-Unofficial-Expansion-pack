// priority: 0
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

/**
 * 快速注册模型
 */
function ModulesRegistry() {
    this.replace = true
    this.type = ''
    this.slots = []
    this.slotsSuffixes = []
    this.renderLayer = 'base'
    this.improvements = []
    this.tweakKey = ''
    this.variants = []
}
ModulesRegistry.prototype = {
    addSlots: function (slots) {
        this.slots.push(slots)
        switch (slots) {
            case 'double/head_left':
                this.slotsSuffixes.push('_left')
                break;
            case 'double/head_right':
                this.slotsSuffixes.push('_right')
                break;
            case 'holo/attachment_0':
                this.slotsSuffixes.push('_0')
                break;
            case 'holo/attachment_1':
                this.slotsSuffixes.push('_1')
                break;
            case 'toolbelt/slot1':
                this.slotsSuffixes.push('_slot1')
                break;
            case 'toolbelt/slot2':
                this.slotsSuffixes.push('_slot2')
                break;
            case 'toolbelt/slot3':
                this.slotsSuffixes.push('_slot3')
                break;
            default:
                delete this.slotsSuffixes
                break;
        }
        switch (slots) {
            case 'double/binding':
            case 'single/binding':
            case 'sword/guard':
            case 'artifact/attachment':
                this.renderLayer = 'higher'
                break;
            case 'double/handle':
            case 'single/handle':
            case 'sword/hilt':
            case 'artifact/internal':
                this.renderLayer = 'lower'
                break;
        }
        switch (slots) {
            case 'bow/stave':
            case 'bow/string':
            case 'crossbow/stave':
            case 'crossbow/stock':
            case 'double/handle':
            case 'single/head':
            case 'single/handle':
            case 'sword/blade':
            case 'sword/hilt':
            case 'shield/grip':
            case 'shield/plate':
            case 'holo/core':
            case 'holo/frame':
            case 'artifact/casing':
            case 'artifact/internal':
                this.type = 'tetra:basic_major_module'
                break;
            case 'bow/riser':
            case 'crossbow/string':
            case 'crossbow/attachment_0':
            case 'crossbow/attachment_1':
            case 'double/binding':
            case 'single/binding':
            case 'sword/guard':
            case 'sword/pommel':
            case 'sword/fuller':
            case 'shield/boss':
            case 'toolbelt/belt':
            case 'artifact/attachment':
                this.type = 'tetra:basic_module'
                break;
            case 'double/head_left':
            case 'double/head_right':
            case 'holo/attachment_0':
            case 'holo/attachment_1':
                this.type = 'tetra:multi_major_module'
                break;
            case 'toolbelt/slot1':
            case 'toolbelt/slot2':
            case 'toolbelt/slot3':
                this.type = 'tetra:toolbelt_module'
                break;
        }
        return this
    },
    addImprovements: function (improvement) {
        this.improvements.push(improvement)
        return this
    },
    setTweakKey: function (tweakKey) {
        this.tweakKey = tweakKey
        return this
    },
    addVariants: function (variant) {
        this.variants.push(variant)
        return this
    },   
}
/**
 * 快速注册模型variants
 * @param {string} key 
 * @param {boolean} extract 
 */
function VariantsRegistry(key) {
    this.materials = []
    this.key = key
    this.integrity = 0
    this.durability = 0
    this.magicCapacity = 0
    this.aspects = {}
    this.tools = {}
    this.effects = {}
    this.attributes = {}
    this.improvements = {}
    this.glyph = { 'textureX': 0, 'textureY': 0 }
    this.models = []
    }
    
VariantsRegistry.prototype = {
    setMaterials: function (materials) {
        this.materials.push(materials)
        return this
    },
    setBasic: function (integrity, durability, magicCapacity) {
        this.integrity = integrity
        this.durability = durability
        this.magicCapacity = magicCapacity
        return this
    },
    addAspects: function (aspect, value) {
        this.aspects[aspect] = value
        return this
    },
    addTools: function (tool, value) {
        this.tools[tool] = value
        return this
    },
    setGlyph: function (value1, value2, address, color) {
        this.glyph['textureX'] = value1
        this.glyph['textureY'] = value2
        if (color) {
            this.glyph['tint'] = color
        }
        if (address) {
            this.glyph['textureLocation'] = address
        }
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
    setModels: function (model, color) {
        if (color) {
            this.models.push({ 'location': model, 'tint': color })
        } else {
            this.models.push({ 'location': model })
        }
        return this
    },
    setExtract: function (availableTexture) {
        this.extract = {
            integrity: 0,
            durability: 0,
            magicCapacity: 0,
            primaryAttributes: {},
            secondaryAttributes: {},
            tertiaryAttributes: {},
            tools: {},
            glyph: this.glyph,
            availableTextures: availableTexture,
            models: this.models
        }
        delete this.glyph
        delete this.models
        return this
    },
    addPrimaryAttributes: function (primaryAttribute) {
        Object.assign(this.extract['primaryAttributes'], primaryAttribute)
        return this
    },
    addSecondaryAttributes: function (secondaryAttribute) {
        Object.assign(this.extract['secondaryAttributes'], secondaryAttribute)
        return this
    },
    addTertiaryAttributes: function (tertiaryAttribute) {
        Object.assign(this.extract['tertiaryAttributes'], tertiaryAttribute)
        return this
    },
    addExtractTools: function (tool) {
        Object.assign(this.extract['tools'], tool)
        return this
    },
    setExtractBasic: function (integrity, durability, magicCapacity) {
        this.extract['integrity'] = integrity
        this.extract['durability'] = durability
        this.extract['magicCapacity'] = magicCapacity
        return this
    },
}

/**
 * 快速注册原理图
 * @param {boolean} materialRevealSlot 
 */
function SchematicsRegistry(materialRevealSlot) {
    this.replace = true
    this.slots = []
    this.keySuffixes = []
    this.renderLayer = 'base'
    this.materialSlotCount = 0
    if (materialRevealSlot) {
        this.materialRevealSlot = 0
    }
    this.hone = false
    this.displayType = 'other'
    this.rarity = 'basic'
    this.glyph = { 'textureX': 0, 'textureY': 0 }
    this.outcomes = []
}
SchematicsRegistry.prototype = {
    addSlots: function (slots) {
        this.slots.push(slots)
        switch (slots) {
            case 'double/head_left':
                this.keySuffixes.push('_left')
                break;
            case 'double/head_right':
                this.keySuffixes.push('_right')
                break;
            case 'holo/attachment_0':
                this.keySuffixes.push('_0')
                break;
            case 'holo/attachment_1':
                this.keySuffixes.push('_1')
                break;
            case 'toolbelt/slot1':
                this.keySuffixes.push('_slot1')
                break;
            case 'toolbelt/slot2':
                this.keySuffixes.push('_slot2')
                break;
            case 'toolbelt/slot3':
                this.keySuffixes.push('_slot3')
                break;
            default:
                delete this.keySuffixes
                break;
        }
        return this
    },
    setRenderLayer: function (renderLayer) {
        this.renderLayer = renderLayer
        return this
    },
    setMaterialSlotCount: function () {
        this.materialSlotCount = 1
        return this
    },
    isHone: function () {
        this.hone = true
        return this
    },
    setRarity: function (displayType, rarity) {
        this.displayType = displayType
        if (rarity) {
            this.rarity = rarity
        }
        return this
    },
    setGlyph: function (value1, value2, address, color) {
        this.glyph['textureX'] = value1
        this.glyph['textureY'] = value2
        if (color) {
            this.glyph['tint'] = color
        }
        if (address) {
            this.glyph['textureLocation'] = address
        }
        return this
    },
    setRequirement: function (requirement) {
        this.requirement = {}
        this.requirement = requirement
        return this
    },
    setTranslation: function (translation) {
        this.translation = {}
        this.translation = translation
        return this
    },
    setOutcomes: function (outcomes) {
        this.outcomes.push(outcomes)
        return this
    },
}
function tetraType(type, module) {
    this.type = type
    this.module = module
}
function tetraAnd(type1, type2) {
    this.type = 'tetra:and'
    this.requirements = [type1, type2]
}
function tetraNot(type) {
    this.type = 'tetra:not'
    this.requirements =type
}
/**
 * 快速注册原理图translation
 */
function TranslationRegistry() {
    this.primaryAttributes = {}
    this.secondaryAttributes = {}
    this.tertiaryAttributes = {}
    this.tools = {}
    this.integrity = 0
    this.durability = 0
    this.magicCapacity = 0
}
TranslationRegistry.prototype = {
    addPrimaryAttributes: function (primaryAttribute) {
        Object.assign(this.primaryAttributes, primaryAttribute)
        return this
    },
    addSecondaryAttributes: function (secondaryAttribute) {
        Object.assign(this.secondaryAttributes, secondaryAttribute)
        return this
    },
    addTertiaryAttributes: function (tertiaryAttribute) {
        Object.assign(this.tertiaryAttributes, tertiaryAttribute)
        return this
    },
    addTools: function (tool) {
        Object.assign(this.tools, tool)
        return this
    },
    setBasic: function (integrity, durability, magicCapacity) {
        this.integrity = integrity
        this.durability = durability
        this.magicCapacity = magicCapacity
        return this
    },
}
/**
 * 快速注册原理图outcomes
 */
function OutcomesRegistry(material) {
    this.materials = [material]
    this.moduleKey = ''
    this.moduleVariant = ''
    this.experiencecost = 0
    this.requiredTools = {}
    this.improvements = {}
}
OutcomesRegistry.prototype = {
    setModule: function (moduleKey, moduleVariant) {
        this.moduleKey = moduleKey
        this.moduleVariant = moduleVariant
        return this
    },
    setExperiencecost: function (experiencecost) {
            this.experiencecost = experiencecost
        return this
    },
    setRequiredTools: function (requiredTools) {
            this.requiredTools = requiredTools
        return this
    },
    setImprovements: function (improvements) {
            this.improvements.push(improvements)
        return this
    },
}
