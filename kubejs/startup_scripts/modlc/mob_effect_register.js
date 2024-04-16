StartupEvents.registry('mob_effect', event => {
    event.create('burning_heart')
        .beneficial()
        .color(Color.DARK_RED)

    event.create('magic_forbiden')
        .modifyAttribute('irons_spellbooks:max_mana', 'kubejsMagicForbiden', -10000, "addition")
        .harmful()
        .color(Color.DARK_GRAY)

    event.create('dragon_power')
        .beneficial()
        .color(Color.DARK_PURPLE)
})