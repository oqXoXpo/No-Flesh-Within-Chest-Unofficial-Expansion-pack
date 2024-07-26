ServerEvents.highPriorityData(event => {
    function registerMaterials(registryModel) {
        let key = registryModel.key
        let category = registryModel.category
        event.addJson(`tetra:materials/${category}/${key}.json`, registryModel)
    }
    //drill - 钻头
    registerMaterials(new MaterialsRegistry('createoreexcavation:diamond_drill', 'drill')
        .setBasic(6, 2, 2, 2774, 35)
        .setIntegrity(3, 2)
        .setTool(5, 9)
        .setTints('diamond_glyph', 'diamond')
        .setRequiredTools('hammer_dig', 4)
        .addTextures('diamond')
    )
    registerMaterials(new MaterialsRegistry('createoreexcavation:drill', 'drill')
        .setBasic(5.8, 3.5, 2.7, 870, 40)
        .setIntegrity(3, 5)
        .setTool(4, 6.5)
        .setTints('iron_glyph', 'iron')
        .setRequiredTools('hammer_dig', 3)
        .addTextures('iron')
    )
    registerMaterials(new MaterialsRegistry('createoreexcavation:netherite_drill', 'drill')
        .setBasic(10.2, 2.7, 3.8, 3152, 73)
        .setIntegrity(4, 9)
        .setTool(6, 11.3)
        .setTints('806164', '695e5f')
        .setRequiredTools('hammer_dig', 4)
        .addTextures('netherite')
    )

    // bone - 骨头
    
    // fabric - 布料

    // fibre - 纤维

    // gem - 宝石

    // metal - 金属

    // misc - 杂项

    // reagent - 试剂

    // scale - 鳞片

    // skin - 皮革

    // socket - 插槽

    // stone - 石头

    // wood - 木材

})