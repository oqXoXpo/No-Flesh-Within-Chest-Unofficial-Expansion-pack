StartupEvents.registry('item', event => {
    /**
     * 
     * @param {Organ} organ 
     * @returns {Internal.BasicItemJS$Builder}
     */
    function registerOrgan(organ) {
        global.ORGAN_LIST.push(organ)
        let builder = event.create(organ.itemID).maxStackSize(organ.maxStackSize).tag('kubejs:organ').group("kubejs.moreorgans")
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
    registerOrgan(new Organ('modlc:sunny_dolls')
        .addScore('buoyant', 1.5)
        .addScore('photosynthesis', 0.5)
        .addTextLines('default', [Text.gray({ "translate": "modlc.tooltips.sunny_dolls.1" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "modlc.tooltips.sunny_dolls.2" })])
        .addTextLines('alt', [LEADING_SYMBOL, Text.gray({ "translate": "modlc.tooltips.sunny_dolls.3" })])
        .build())
        .texture('modlc:item/organs/weather/sunny_dolls')
        .tag('itemborders:green')
        .tag('kubejs:rclick_only')
        .tag('kubejs:fantasy');

    registerOrgan(new Organ('modlc:mechanical_core')
        .addScore('health', 1.5)
        .addScore('iron_repair', 1)
        .addScore('strength', -2)
        .addScore('speed', -1)
        .build())
        .texture('modlc:item/organs/machine/mechanical_core')
        .tag('kubejs:heart')
        .tag('itemborders:iron')
        .tag('kubejs:key_pressed')
        .tag('kubejs:machine')
        .tag('kubejs:revolution')
        .tag('kubejs:legends');
	

});