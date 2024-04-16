StartupEvents.registry('item', event => {
    /**
     * 
     * @param {Organ} organ 
     * @returns {Internal.BasicItemJS$Builder}
     */
    function registerOrgan(organ) {
        global.ORGAN_LIST.push(organ)
        let builder = event.create(organ.itemID).maxStackSize(organ.maxStackSize).tag('kubejs:organ').group("kubejs.organs")
        if (organ.ctrlTextLines.length > 0) {
            builder.tag('chestcavity:active')
        }
        if (organ.altTextLines.length > 0) {
            builder.tag('chestcavity:special')
        }
        return builder
    }

    /**
     * 器官注册
     */
    // 无尽节律之心
    registerOrgan(new Organ('kubejs:infinity_beats')
        .addScore('health', -2)
        .addScore('defense', -2)
        .addScore('breath_recovery', -2)
        .addTextLines('alt', [LEADING_SYMBOL, Text.yellow({ "translate": "kubejs.tooltips.infinity_beats.1" }), Text.gray({ "translate": "kubejs.tooltips.infinity_beats.2" }), Text.yellow(4), Text.gray({ "translate": "kubejs.tooltips.infinity_beats.3" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "kubejs.tooltips.infinity_beats.4" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "kubejs.tooltips.infinity_beats.5" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.red({ "translate": "kubejs.tooltips.infinity_beats.6" })])
        .build())
        .texture('kubejs:item/organs/infinity/infinity_beats')
        .tag('kubejs:infinity')
        .tag('itemborders:diamond')
        .tag('kubejs:damage_only');
    
    
});