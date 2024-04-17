// priority: 9
//优先级要小于官方
//引用官方策略
var Active1 = Object.assign(organActiveStrategies, moorganActiveStrategies);
var Active2 = Object.assign(organActiveOnlyStrategies, moorganActiveStrategies);

/**
 * 器官激活策略
 * @constant
 * @type {Object<string,function(Internal.Player, organ, Map):void>}
 */
const moorganActiveStrategies = {
    
};

/**
 * 器官激活唯一策略
 * @constant
 * @type {Object<string,function(Internal.Player, organ, Map):void>}
 */
const moorganActiveOnlyStrategies = {
    
};
