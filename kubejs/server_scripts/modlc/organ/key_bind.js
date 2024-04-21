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
        let main = player.mainHandItem
        let off = player.offHandItem
        if (main != 'modlc:engine' && off != 'modlc:engine') return
        let handItem = main == 'modlc:engine' ? 'main_hand' : 'off_hand'
        let damage = player.getHeldItem(handItem).getDamageValue()
        let maxDamage = player.getHeldItem(handItem).getMaxDamage()
        if (damage >= maxDamage) {
            return player.setStatusMessage([Text.gold({ "translate": "modlc.msg.mechanical_core.1" })])
        }
        let itemMap = getPlayerChestCavityItemMap(player)
        let lossDamage = itemMap.get('modlc:mechanical_core').length * 1
        player.setStatusMessage([Text.gold({ "translate": "modlc.msg.mechanical_core.2" })])
        player.damageHeldItem(handItem, lossDamage)
        player.addItemCooldown('modlc:mechanical_core', 20 * 15)
    },
};
//引用官方策略
var KeyPressed1 = Object.assign(organPlayerKeyPressedOnlyStrategies, moorganPlayerKeyPressedOnlyStrategies);
