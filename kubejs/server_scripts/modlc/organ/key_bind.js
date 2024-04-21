// priority: 9
//优先级要小于官方

/**
 * 主动策略
 * @constant
 * @type {Object<string,function(Internal.NetworkEventJS, organ):void>}
 */
const moorganPlayerKeyPressedOnlyStrategies = {
    'modlc:mechanical_core': function (event, organ) {
        let player = event.player
        let itemarray = [player.getMainHandItem(), player.getOffHandItem()]
        let position = itemarray.indexOf('modlc:engine')
        if (position < 0) return
        let item = itemarray[position]
        let damage = item.getDamageValue()
        if (damage == item.getMaxDamage()) {
            return player.setStatusMessage([Text.gold({ "translate": "modlc.msg.mechanical_core.1" })])
        }
        let itemMap = getPlayerChestCavityItemMap(player)
        let lossDamage = itemMap.get('modlc:mechanical_core').length * 1
        player.setStatusMessage([Text.gold({ "translate": "modlc.msg.mechanical_core.2" })])
        item.setDamageValue(damage += lossDamage)
        player.addItemCooldown('modlc:mechanical_core', 20 * 15)
    },
};
//引用官方策略
var KeyPressed1 = Object.assign(organPlayerKeyPressedOnlyStrategies, moorganPlayerKeyPressedOnlyStrategies);
