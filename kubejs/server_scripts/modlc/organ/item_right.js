// priority: 9
//优先级要小于官方
//引用官方策略
var RightClicked1 = Object.assign(organRightClickedStrategies, moorganRightClickedStrategies);
var RightClicked2 = Object.assign(organRightClickedOnlyStrategies, moorganRightClickedOnlyStrategies);

/**
 * 器官右键事件策略
 * @constant
 * @type {Object<string,function(Internal.ItemClickedEventJS, organ):void>}
 */
const moorganRightClickedStrategies = {

}

/**
 * 器官右键事件唯一策略
 * @constant
 * @type {Object<string,function(Internal.ItemClickedEventJS, organ):void>}
 */
const moorganRightClickedOnlyStrategies = {
    
};