// priority: 9
//优先级要小于官方

/**
 * 器官右键事件策略
 * @constant
 * @type {Object<string,function(Internal.ItemClickedEventJS, organ):void>}
 */
const moorganRightClickedStrategies = {

};
//引用官方策略
var RightClicked1 = Object.assign(organRightClickedStrategies, moorganRightClickedStrategies);

/**
 * 器官右键事件唯一策略
 * @constant
 * @type {Object<string,function(Internal.ItemClickedEventJS, organ):void>}
 */
const moorganRightClickedOnlyStrategies = {
    'modlc:sunny_dolls': function (event, organ) {
        let player = event.player
        if (event.item == 'minecraft:sunflower') {
            player.level.server.runCommandSilent(`weather clear 1200`)
        } else if (event.item == 'minecraft:blue_orchid') {
            player.level.server.runCommandSilent(`weather rain 1200`)
        } else {
            return
        }
        event.item.shrink(1)
        player.addItemCooldown(event.item, 20 * 60)
    },
};
//引用官方策略
var RightClicked2 = Object.assign(organRightClickedOnlyStrategies, moorganRightClickedOnlyStrategies);
