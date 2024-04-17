// priority: 9
//优先级要小于官方

/**
 * 器官食物食用策略
 * @constant
 * @type {Object<string,function(Internal.FoodEatenEventJS, organ):void>}
 */
const moorganFoodEatenStrategies = {
    
};
//引用官方策略
var FoodEaten1 = Object.assign(organFoodEatenStrategies, moorganFoodEatenStrategies);

/**
 * 器官食物食用唯一策略
 * @constant
 * @type {Object<string,function(Internal.FoodEatenEventJS, organ):void>}
 */
const moorganFoodEatenOnlyStrategies = {
    
};
//引用官方策略
var FoodEaten2 = Object.assign(organFoodEatenOnlyStrategies, moorganFoodEatenOnlyStrategies);
