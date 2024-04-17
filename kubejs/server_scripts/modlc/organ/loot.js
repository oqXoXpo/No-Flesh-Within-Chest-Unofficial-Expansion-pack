// priority: 9
//优先级要小于官方

/**
 * 器官实体掉落策略
 * @constant
 * @type {Object<string,function(Internal.LootContextJS, organ):void>}
 */
const moentityLootStrategies = {

};
//引用官方策略
var entityLoot1 = Object.assign(entityLootStrategies, moentityLootStrategies);

/**
 * 器官实体掉落唯一策略
 * @constant
 * @type {Object<string,function(Internal.LootContextJS, organ):void>}
 */
const moentityLootOnlyStrategies = {
    
};
//引用官方策略
var entityLoot2 = Object.assign(entityLootOnlyStrategies, moentityLootOnlyStrategies);

/**
 * 器官实体战利品策略
 * @constant
 * @type {Object<string,function(Internal.LootContextJS, organ):void>}
 */
const mochestLootStrategies = {

};
//引用官方策略
var chestLoot1 = Object.assign(chestLootStrategies, mochestLootStrategies);

/**
 * 器官实体战利品唯一策略
 * @constant
 * @type {Object<string,function(Internal.LootContextJS, organ):void>}
 */
const mochestLootOnlyStrategies = {
    
};
//引用官方策略
var chestLoot2 = Object.assign(chestLootOnlyStrategies, mochestLootOnlyStrategies);
