import BaseContainer from '@scenes/base/BaseContainer'

import {Button, Interactive, NineSlice} from '@components/components'

/* START OF COMPILED CODE */

export default class StampPrompt extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        /** @type {Phaser.GameObjects.Image} */
        this.stampEarnedBg
        /** @type {Phaser.GameObjects.Image} */
        this.stampEarnedImage
        /** @type {Phaser.GameObjects.Text} */
        this.stampEarnedHeader
        /** @type {Phaser.GameObjects.Text} */
        this.stampEarnedBody
        /** @type {Phaser.GameObjects.Container} */
        this.stampEarned

        // stampEarned
        const stampEarned = scene.add.container(213, -630)
        this.add(stampEarned)

        // stampEarnedBg
        const stampEarnedBg = scene.add.image(196, 0, 'main', 'stamps/bg')
        stampEarnedBg.alpha = 0.7
        stampEarnedBg.alphaTopLeft = 0.7
        stampEarnedBg.alphaTopRight = 0.7
        stampEarnedBg.alphaBottomLeft = 0.7
        stampEarnedBg.alphaBottomRight = 0.7
        stampEarned.add(stampEarnedBg)

        // stampEarnedImage
        const stampEarnedImage = scene.add.image(0, 70, 'main', 'stamps/activities0001')
        stampEarned.add(stampEarnedImage)

        // stampEarnedHeader
        const stampEarnedHeader = scene.add.text(88, 25, '', {})
        stampEarnedHeader.text = 'STAMP EARNED!'
        stampEarnedHeader.setStyle({fixedWidth: 380, fontFamily: 'cpBurbankSmall', fontSize: '40px', fontStyle: 'bold italic'})
        stampEarned.add(stampEarnedHeader)

        // stampEarnedBody
        const stampEarnedBody = scene.add.text(90, 80, '', {})
        stampEarnedBody.text = 'Stamp Name'
        stampEarnedBody.setStyle({fixedWidth: 380, fontFamily: 'cpBurbankSmall', fontSize: '35px'})
        stampEarned.add(stampEarnedBody)

        this.stampEarnedBg = stampEarnedBg
        this.stampEarnedImage = stampEarnedImage
        this.stampEarnedHeader = stampEarnedHeader
        this.stampEarnedBody = stampEarnedBody
        this.stampEarned = stampEarned

        /* START-USER-CTR-CODE */

        this.scene = scene

        // Attached scene
        this.externalScene

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    stampTween() {
        let tween = this.scene.tweens.add({
            targets: this.stampEarned,
            y: -480,
            delay: 1000,
            duration: 300,
            onComplete: () => this.onStampTweenComplete()
        })
    }

    onStampTweenComplete() {
        let tween = this.scene.tweens.add({
            targets: this.stampEarned,
            y: -630,
            delay: 1500,
            duration: 300
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
