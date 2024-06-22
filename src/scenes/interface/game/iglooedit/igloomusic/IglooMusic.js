import BaseContainer from '@scenes/base/BaseContainer'

import {SimpleButton, Button, Interactive, LocalisedString} from '@components/components'

import MusicItem from './music_item/MusicItem'

/* START OF COMPILED CODE */

export default class IglooMusic extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        /** @type {Array<any>} */
        this.musicItems

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960)
        block.isFilled = true
        block.fillColor = 0
        block.fillAlpha = 0.2
        this.add(block)

        // igloo_music_selected
        const igloo_music_selected = scene.add.image(0, -370, 'iglooedit-new', 'igloo-music-selected')
        this.add(igloo_music_selected)

        // music_bg
        const music_bg = scene.add.ninePatchContainer(0, 16, 800, 700, 'iglooedit-new', 'music-bg')
        this.add(music_bg)

        // blueButton
        const blueButton = scene.add.image(352, -290, 'iglooedit-new', 'close-btn')
        this.add(blueButton)

        // blueX
        const blueX = scene.add.image(352, -292, 'iglooedit-new', 'x')
        this.add(blueX)

        // title
        const title = scene.add.text(-68, -297, '', {})
        title.setOrigin(0.5, 0)
        title.text = 'Igloo Music'
        title.setStyle({color: '#3e83c5ff', fixedWidth: 600, fontFamily: 'cpBurbankSmall', fontSize: '32px', fontStyle: 'bold'})
        this.add(title)

        // title_1
        const title_1 = scene.add.text(-174, -384, '', {})
        title_1.setOrigin(0.5, 0)
        title_1.text = 'Igloo Music'
        title_1.setStyle({align: 'center', color: '#3e83c5ff', fixedWidth: 330, fontFamily: 'cpBurbankSmall', fontSize: '32px', fontStyle: 'bold'})
        this.add(title_1)

        // title_2
        const title_2 = scene.add.text(175, -384, '', {})
        title_2.setOrigin(0.5, 0)
        title_2.text = 'SoundStudio'
        title_2.setStyle({align: 'center', color: '#3e83c5ff', fixedWidth: 330, fontFamily: 'cpBurbankSmall', fontSize: '32px', fontStyle: 'bold'})
        this.add(title_2)

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(174, -369, 128, 128)
        rectangle_1.scaleX = 2.6662764784624313
        rectangle_1.scaleY = 0.5953001768076465
        this.add(rectangle_1)

        // rectangle
        const rectangle = scene.add.rectangle(-174, -370, 128, 128)
        rectangle.scaleX = 2.6662764784624313
        rectangle.scaleY = 0.5953001768076465
        this.add(rectangle)

        // lists
        const musicItems = []

        // block (components)
        new Interactive(block)

        // blueButton (components)
        const blueButtonButton = new Button(blueButton)
        blueButtonButton.callback = () => (this.visible = false)

        // title (components)
        const titleLocalisedString = new LocalisedString(title)
        titleLocalisedString.id = 'music'

        // title_1 (components)
        const title_1LocalisedString = new LocalisedString(title_1)
        title_1LocalisedString.id = 'music'

        // title_2 (components)
        const title_2LocalisedString = new LocalisedString(title_2)
        title_2LocalisedString.id = 'soundstudio'

        // rectangle_1 (components)
        const rectangle_1SimpleButton = new SimpleButton(rectangle_1)
        rectangle_1SimpleButton.callback = () => this.soundStudioMode()

        // rectangle (components)
        const rectangleSimpleButton = new SimpleButton(rectangle)
        rectangleSimpleButton.callback = () => this.iglooMusicMode()

        this.musicItems = musicItems

        /* START-USER-CTR-CODE */
        this.musicMask = this.createMask()

        let ypos = -200
        Object.values(this.crumbs.music).forEach((song, i) => {
            let xpos
            if (i % 2 == 0) {
                xpos = -200
            } else {
                xpos = 200
            }
            let musicItem = new MusicItem(scene, xpos, ypos)
            this.add(musicItem)
            this.musicItems.push(musicItem)

            musicItem.name = song.name
            musicItem.musicId = Object.keys(this.crumbs.music)[i]
            if (musicItem.musicId == this.shell.room.music) {
                musicItem.bold = true
            }
            musicItem.onAwake()

            musicItem.setMask(this.musicMask)

            if (i % 2 == 1) {
                ypos += 70
            }
        })
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    show() {
        this.scene.input.addListener('wheel', this.onScroll, this)
        this.visible = true
    }

    close() {
        if (this.musicIsPreview) {
            this.shell.room.updateMusic(this.shell.room.music)
        }
        this.scene.input.removeListener('wheel', this.onScroll, this)
        this.visible = false
    }

    onScroll(pointer, currentlyOver, deltaX, deltaY) {
        if (this.musicItems[0].y >= -200 && deltaY < 0) {
            return
        } else if (this.musicItems[this.musicItems.length - 1].y <= 310 && deltaY > 0) {
            return
        }
        for (let item of this.musicItems) {
            item.y += -deltaY
        }
    }

    createMask() {
        let mask = this.scene.add.graphics()
        mask.fillStyle(0xffffff, 0)
        mask.beginPath()
        mask.fillRect(378, 238, 800 * window.currentScale, 600 * window.currentScale)
        return mask.createGeometryMask()
    }

    updateMusic(track) {
        this.shell.musicController.addMusic(track)
        this.shell.room.args.music = track
        this.shell.interface.iglooEdit.saveIgloo()
        this.visible = false
        for (let item of this.musicItems) {
            if (item.musicId != track) {
                item.bold = false
                item.onAwake()
            }
        }
    }

    iglooMusicMode() {}

    soundStudioMode() {
        this.shell.room.startSoundStudio()
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
