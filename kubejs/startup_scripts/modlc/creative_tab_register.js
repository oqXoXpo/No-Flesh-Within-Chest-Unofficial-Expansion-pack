//新建创造物品栏
const $CreativeTabRegistry1 = Java.loadClass("dev.architectury.registry.CreativeTabRegistry")

$CreativeTabRegistry1.create(Utils.id("kubejs:moreorgans"), () => Item.of("kubejs:burning_heart"))
