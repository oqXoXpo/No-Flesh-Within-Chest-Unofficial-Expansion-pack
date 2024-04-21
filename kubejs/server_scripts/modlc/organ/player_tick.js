// priority: 9
//优先级要小于官方

/**
 * 玩家Tick秒级策略
 * @constant
 * @type {Object<string,function(Internal.SimplePlayerEventJS, organ):void>}
 */
const moorganPlayerTickStrategies = {
    
};
//引用官方策略
var Tick1 = Object.assign(organPlayerTickStrategies, moorganPlayerTickStrategies);

/**
 * 玩家Tick秒级唯一策略
 * @constant
 * @type {Object<string,function(Internal.SimplePlayerEventJS, organ):void>}
 */
const moorganPlayerTickOnlyStrategies = {
    
};
//引用官方策略
var Tick2 = Object.assign(organPlayerTickOnlyStrategies, moorganPlayerTickOnlyStrategies);
