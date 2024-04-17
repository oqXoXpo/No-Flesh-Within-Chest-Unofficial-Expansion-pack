// priority: 9
//优先级要小于官方

/**
 * 器官激活策略
 * @constant
 * @type {Object<string,function(Internal.Player, organ, Map):void>}
 */
const moorganActiveStrategies = {
    
};
//引用官方策略
var Active1 = Object.assign(organActiveStrategies, moorganActiveStrategies);

/**
 * 器官激活唯一策略
 * @constant
 * @type {Object<string,function(Internal.Player, organ, Map):void>}
 */
const moorganActiveOnlyStrategies = {
    
};
//引用官方策略
var Active2 = Object.assign(organActiveOnlyStrategies, moorganActiveStrategies);
