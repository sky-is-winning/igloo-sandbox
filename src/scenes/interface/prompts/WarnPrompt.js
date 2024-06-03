import BaseContainer from '@scenes/base/BaseContainer'

import {Interactive, Button} from '@components/components'

import DualButtons from './buttons/DualButtons'
import SingleButton from './buttons/SingleButton'

/* START OF COMPILED CODE */

export default class WarnPrompt extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        /** @type {NinePatchContainer} */
        this.bg
        /** @type {NinePatchContainer} */
        this.single
        /** @type {Phaser.GameObjects.Text} */
        this.ok
        /** @type {Phaser.GameObjects.Text} */
        this.info
        /** @type {Phaser.GameObjects.Text} */
        this.header
        /** @type {Phaser.GameObjects.Image} */
        this.image

        this.visible = false

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960)
        block.isFilled = true
        block.fillColor = 0
        block.fillAlpha = 0.2
        this.add(block)

        // bg
        const bg = scene.add.ninePatchContainer(0, 0, 700, 700, 'banning', 'banned_bg')
        bg.marginLeft = 60
        bg.marginTop = 60
        bg.marginRight = 60
        bg.marginBottom = 60
        this.add(bg)

        // single
        const single = scene.add.ninePatchContainer(0, 229, 279, 112, 'banning', 'button')
        this.add(single)

        // ok
        const ok = scene.add.text(0, 229, '', {})
        ok.setOrigin(0.5, 0.5)
        ok.text = this.crumbs.getString('okay')
        ok.setStyle({align: 'center', color: '#ffffffff', fixedWidth: 650, fontFamily: 'cpBurbankSmall', fontSize: '40px', fontStyle: 'bold'})
        this.add(ok)

        // info
        const info = scene.add.text(0, 43, '', {})
        info.setOrigin(0.5, 0)
        info.text = 'This is a localised textfield'
        info.setStyle({align: 'center', color: '#ffffffff', fixedWidth: 600, fontFamily: 'cpBurbankSmall', fontSize: '30px'})
        info.setWordWrapWidth(600)
        this.add(info)

        // header
        const header = scene.add.text(0, -26, '', {})
        header.setOrigin(0.5, 0.5)
        header.text = 'This is a localised textfield'
        header.setStyle({align: 'center', color: '#ffffffff', fixedWidth: 600, fontFamily: 'cpBurbankSmall', fontSize: '30px', fontStyle: 'bold'})
        header.setWordWrapWidth(600)
        this.add(header)

        // image
        const image = scene.add.image(0, -184, 'banning', 'rude-ban')
        this.add(image)

        // block (components)
        new Interactive(block)

        // single (components)
        const singleButton = new Button(single)
        singleButton.callback = () => this.onOkClick()

        this.bg = bg
        this.single = single
        this.ok = ok
        this.info = info
        this.header = header
        this.image = image

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    showWarn(reason) {
        this.visible = true
        switch (reason) {
            case 'k':
                this.image.setTexture('banning', 'cheat-ban')
                this.header.text = this.crumbs.getString('kick-header')
                this.info.text = this.crumbs.getString('kick-body')
                this.onOkClick = () => document.location.reload()
                break
            case 'c':
                this.image.setTexture('banning', 'rude-warn')
                this.header.text = this.crumbs.getString('warning-header')
                this.info.text = this.crumbs.getString('warning-body')
                this.onOkClick = () => (this.visible = false)
                break
        }
    }

    showMute(duration) {
        this.visible = true
        this.duration = duration

        this.image.setTexture('banning', 'rude-warn')
        this.header.text = this.getString('mute-header')
        this.info.text = this.getString('mute-body')
        this.onOkClick = () => (this.visible = false)
    }

    showBan(reason) {
        this.visible = true

        if (reason.includes(',')) {
            this.duration = parseInt(reason.split(',')[1])
            reason = reason.split(',')[0]
        } else {
            this.duration = 0
        }

        switch (reason) {
            case 'c':
                this.image.setTexture('banning', 'rude-ban')
                this.header.text = this.getString('rude-ban-header')
                this.info.text = this.getString('rude-ban-body')
                break
            case 'p':
                this.image.setTexture('banning', 'rude-ban')
                this.header.text = this.getString('personal-info-header')
                this.info.text = this.getString('personal-info-body')
                break
            case 'm':
                this.image.setTexture('banning', 'cheat-ban')
                this.header.text = this.getString('cheat-ban-header')
                this.info.text = this.getString('cheat-ban-body')
                break
            case 'i':
                this.image.setTexture('banning', 'igloo-ban')
                this.header.text = this.getString('innapropriate-igloo-header')
                this.info.text = this.getString('innapropriate-igloo-body')
                break
            case 'o':
                this.image.setTexture('banning', 'rude-ban')
                this.header.text = this.getString('ban-header')
                this.info.text = this.getString('ban-body')
        }

        this.onOkClick = () => document.location.reload()
    }

    getString(key) {
        if (this.duration > 0) {
            return this.crumbs.getString(`${key},${this.duration}`)
        }
        return this.crumbs.getString(key)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
