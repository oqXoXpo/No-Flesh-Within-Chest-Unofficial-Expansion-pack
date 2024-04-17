//新建创造物品栏
const $CreativeTabRegistrymore = Java.loadClass("dev.architectury.registry.CreativeTabRegistry")

$CreativeTabRegistrymore.create(Utils.id("kubejs:moreorgans"), () => Item.of("kubejs:burning_heart"))
