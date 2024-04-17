// priority: 9
//优先级要小于官方
//引用官方策略
var BlockBroken1 = Object.assign(organBlockBrokenStrategies, moorganBlockBrokenStrategies);
var BlockBroken2 = Object.assign(organBlockBrokenOnlyStrategies, moorganBlockBrokenOnlyStrategies);

/**
 * 器官方块破坏策略
 * @constant
 * @type {Object<string,function(Internal.BlockBrokenEventJS, organ):void>}
 */
const moorganBlockBrokenStrategies = {
    
};

/**
 * 器官方块破坏唯一策略
 * @constant
 * @type {Object<string,function(Internal.BlockBrokenEventJS, organ):void>}
 */
const moorganBlockBrokenOnlyStrategies = {
    
};