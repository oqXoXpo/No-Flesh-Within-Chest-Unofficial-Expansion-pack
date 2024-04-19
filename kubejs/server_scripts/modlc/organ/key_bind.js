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
        let item = itemarray[position]
        let damage = item.getDamageValue()
        if (position < 0) return
        if (damage == item.getMaxDamage()) {
            return player.setStatusMessage([Text.gold('发动机'), '需要', Text.red('充电')])
        }


        item.setDamageValue(damage += 1)
        player.addItemCooldown('modlc:mechanical_core', 20 * 15)
    },
};
//引用官方策略
var KeyPressed1 = Object.assign(organPlayerKeyPressedOnlyStrategies, moorganPlayerKeyPressedOnlyStrategies);
