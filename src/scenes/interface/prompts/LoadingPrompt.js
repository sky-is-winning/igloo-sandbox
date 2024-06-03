import BaseContainer from '@scenes/base/BaseContainer'

import {Button, Interactive, NineSlice} from '@components/components'

/* START OF COMPILED CODE */

export default class LoadingPrompt extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        /** @type {NinePatchContainer} */
        this.bg
        /** @type {Phaser.GameObjects.Sprite} */
        this.bar
        /** @type {Phaser.GameObjects.Sprite} */
        this.spinner

        this.visible = false

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960)
        block.isFilled = true
        block.fillColor = 0
        block.fillAlpha = 0.2
        this.add(block)

        // bg
        const bg = scene.add.ninePatchContainer(0, -40, 708, 584, 'prompt', 'window')
        bg.marginLeft = 50
        bg.marginTop = 50
        bg.marginRight = 50
        bg.marginBottom = 50
        this.add(bg)

        // blueButton
        const blueButton = scene.add.image(295, -273, 'main', 'blue-button')
        this.add(blueButton)

        // blueX
        const blueX = scene.add.image(295, -275, 'main', 'blue-x')
        this.add(blueX)

        // bar
        const bar = scene.add.sprite(0, -40, 'load', 'beam_0001')
        this.add(bar)

        // spinner
        const spinner = scene.add.sprite(-86, -40, 'load', 'load_0001')
        spinner.scaleX = 0.35
        spinner.scaleY = 0.35
        this.add(spinner)

        // block (components)
        new Interactive(block)

        // blueButton (components)
        const blueButtonButton = new Button(blueButton)
        blueButtonButton.callback = () => this.close()

        this.bg = bg
        this.bar = bar
        this.spinner = spinner

        /* START-USER-CTR-CODE */

        this.scene = scene

        // Attached scene
        this.externalScene

        this.tween = scene.tweens.add({
            targets: this.spinner,
            angle: {from: 0, to: 180},
            duration: 900,
            repeat: -1,
            ease: 'Cubic'
        })

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    show(scene, progress = 0) {
        // Can't start without attached scene
        if (!scene) return

        this.externalScene = scene

        this.spinner.stop('load-spinner')
        this.bar.stop('load-bar')
        this.spinner.play('load-spinner')
        this.bar.play('load-bar')

        this.visible = true
        scene.events.once('create', () => (this.visible = false))
    }

    close() {
        this.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
