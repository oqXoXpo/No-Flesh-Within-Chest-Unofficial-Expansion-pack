// priority: 9
//优先级要小于官方
//引用官方策略
var Enchant1 = Object.assign(organPlayerEnchantStrategies, moorganPlayerEnchantStrategies);
var Enchant2 = Object.assign(organPlayerEnchantOnlyStrategies, moorganPlayerEnchantOnlyStrategies);

/**
 * 附魔策略
 * @constant
 * @type {Object<string,function(Internal.EnchantmentTableServerEventJS, organ):void>}
 */
const moorganPlayerEnchantStrategies = {
    
};

/**
 * 附魔唯一策略
 * @constant
 * @type {Object<string,function(Internal.EnchantmentTableServerEventJS, organ):void>}
 */
const moorganPlayerEnchantOnlyStrategies = {
    
};
