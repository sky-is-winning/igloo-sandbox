import BaseContainer from '@scenes/base/BaseContainer'

import {Button, SimpleButton} from '@components/components'

/* START OF COMPILED CODE */

export default class MusicItem extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        /** @type {Phaser.GameObjects.Text} */
        this.title
        /** @type {string} */
        this.name = ''
        /** @type {number} */
        this.musicId = 0
        /** @type {boolean} */
        this.bold = false

        // item
        const item = scene.add.image(0, 0, 'iglooedit-new', 'play')
        this.add(item)

        // title
        const title = scene.add.text(18, 0, '', {})
        title.setOrigin(0.5, 0.5)
        title.setStyle({color: '#3e83c5ff', fixedWidth: 280, fontFamily: 'cpBurbankSmall', fontSize: '18px'})
        this.add(title)

        // play-btn
        const play_btn = scene.add.ellipse(-144, 0, 128, 128)
        play_btn.scaleX = 0.33164760526295156
        play_btn.scaleY = 0.33164760526295156
        play_btn.fillColor = 1820429
        play_btn.fillAlpha = 0.5
        this.add(play_btn)

        // item (components)
        const itemButton = new Button(item)
        itemButton.callback = () => this.onClick()

        // play_btn (components)
        const play_btnSimpleButton = new SimpleButton(play_btn)
        play_btnSimpleButton.callback = () => this.previewTrack()

        this.title = title

        /* START-USER-CTR-CODE */

        scene.events.once('scene-awake', this.onAwake, this)

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    onAwake() {
        this.title.text = this.name

        if (this.bold) {
            this.title.setFontStyle('bold')
        } else {
            this.title.setFontStyle('normal')
        }
    }

    onClick() {
        this.parentContainer.musicIsPreview = false
        this.parentContainer.updateMusic(this.musicId)
        this.bold = true
        this.onAwake()
    }

    previewTrack() {
        this.parentContainer.musicIsPreview = true
        this.shell.musicController.addMusic(this.musicId)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
