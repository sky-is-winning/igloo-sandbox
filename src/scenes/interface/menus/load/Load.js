import BaseScene from '@scenes/base/BaseScene'
import {Interactive} from '@components/components'

/* START OF COMPILED CODE */

export default class Load extends BaseScene {
    constructor() {
        super('Load')

        /** @type {Phaser.GameObjects.Sprite} */
        this.cart
        /** @type {Phaser.GameObjects.Sprite} */
        this.pizza
        /** @type {Phaser.GameObjects.Sprite} */
        this.shovel
        /** @type {Phaser.GameObjects.Sprite} */
        this.logo
        /** @type {Phaser.GameObjects.Sprite} */
        this.bar
        /** @type {Phaser.GameObjects.Sprite} */
        this.spinner

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {
        this.load.pack('load-pack', 'client/media/interface/menus/load/load-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        const bg = this.add.image(0, 0, 'load', 'bg')
        bg.setOrigin(0, 0)

        // cart
        const cart = this.add.sprite(760, 363, 'load', 'penguin3_0001')
        cart.visible = false

        // pizza
        const pizza = this.add.sprite(760, 262, 'load', 'penguin2_0001')
        pizza.visible = false

        // shovel
        const shovel = this.add.sprite(760, 384, 'load', 'penguin1_0001')
        shovel.visible = false

        // logo
        const logo = this.add.sprite(762, 418, 'logo', 'tween0001')
        logo.visible = false

        // bar
        const bar = this.add.sprite(760, 611, 'load', 'beam_0001')

        // spinner
        const spinner = this.add.sprite(674, 611, 'load', 'load_0001')
        spinner.scaleX = 0.35
        spinner.scaleY = 0.35

        // bg (components)
        new Interactive(bg)

        this.cart = cart
        this.pizza = pizza
        this.shovel = shovel
        this.logo = logo
        this.bar = bar
        this.spinner = spinner

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create(data) {
        this._create()

        this.events.on('sleep', this.onSleep, this)
        this.events.on('wake', this.onWake, this)

        this.shovel.play('load-shovel')
        this.cart.play('load-cart')
        this.pizza.play('load-pizza')
        this.spinner.play('load-spinner')

        this.setContent(data.text, data.showBar, data.isLogo)
    }

    onSleep() {}

    onWake(sys, data) {
        this.setContent(data.text, data.showBar, data.isLogo)
    }

    setContent(text, showBar, isLogo) {
        this.bar.play('load-bar')

        if (isLogo) {
            this.logo.visible = true
            this.logo.play('load-logo-tween')
            this.bar.y = 750
            this.spinner.y = 750
            this.shovel.visible = false
            this.cart.visible = false
            this.pizza.visible = false
            return
        }

        this.logo.visible = false
        this.logo.stop('load-logo-tween')
        this.bar.y = 611
        this.spinner.y = 611
        var sprite = Phaser.Math.RND.between(0, 2)
        if (sprite == 0) {
            this.shovel.visible = true
            this.cart.visible = false
            this.pizza.visible = false
        } else if (sprite == 1) {
            this.shovel.visible = false
            this.cart.visible = true
            this.pizza.visible = false
        } else {
            this.shovel.visible = false
            this.cart.visible = false
            this.pizza.visible = true
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
