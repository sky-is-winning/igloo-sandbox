import BaseContainer from '@scenes/base/BaseContainer'

import {SimpleButton, Button, Interactive, LocalisedString} from '@components/components'

import MusicItem from './music_item/MusicItem'

/* START OF COMPILED CODE */

export default class IglooMusic extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        /** @type {MusicItem[]} */
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

        // musicItem
        const musicItem = new MusicItem(scene, -200, -200)
        this.add(musicItem)

        // musicItem_1
        const musicItem_1 = new MusicItem(scene, 200, -200)
        this.add(musicItem_1)

        // musicItem_2
        const musicItem_2 = new MusicItem(scene, -200, -130)
        this.add(musicItem_2)

        // musicItem_3
        const musicItem_3 = new MusicItem(scene, 200, -130)
        this.add(musicItem_3)

        // musicItem_4
        const musicItem_4 = new MusicItem(scene, -200, 10)
        this.add(musicItem_4)

        // musicItem_5
        const musicItem_5 = new MusicItem(scene, 200, 10)
        this.add(musicItem_5)

        // musicItem_6
        const musicItem_6 = new MusicItem(scene, -200, -60)
        this.add(musicItem_6)

        // musicItem_7
        const musicItem_7 = new MusicItem(scene, 200, -60)
        this.add(musicItem_7)

        // musicItem_8
        const musicItem_8 = new MusicItem(scene, -200, 290)
        this.add(musicItem_8)

        // musicItem_9
        const musicItem_9 = new MusicItem(scene, 200, 290)
        this.add(musicItem_9)

        // musicItem_10
        const musicItem_10 = new MusicItem(scene, -200, 220)
        this.add(musicItem_10)

        // musicItem_11
        const musicItem_11 = new MusicItem(scene, 200, 220)
        this.add(musicItem_11)

        // musicItem_12
        const musicItem_12 = new MusicItem(scene, -200, 150)
        this.add(musicItem_12)

        // musicItem_13
        const musicItem_13 = new MusicItem(scene, -200, 80)
        this.add(musicItem_13)

        // musicItem_14
        const musicItem_14 = new MusicItem(scene, 200, 80)
        this.add(musicItem_14)

        // musicItem_15
        const musicItem_15 = new MusicItem(scene, 200, 150)
        this.add(musicItem_15)

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
        const musicItems = [musicItem, musicItem_1, musicItem_2, musicItem_3, musicItem_6, musicItem_7, musicItem_4, musicItem_5, musicItem_13, musicItem_14, musicItem_12, musicItem_15, musicItem_10, musicItem_11, musicItem_8, musicItem_9]

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
        const musicList = 'default'
        for (let item in this.musicItems) {
            let trackId = this.crumbs.igloo_music[musicList][item]
            if (!trackId) {
                this.musicItems[item].visible = false
                continue
            }
            let track = this.crumbs.music[trackId]
            if (!track) {
                this.musicItems[item].visible = false
                continue
            }
            this.musicItems[item].name = track.name
            this.musicItems[item].musicId = trackId
            if (trackId == this.shell.room.music) {
                this.musicItems[item].bold = true
            }
            this.musicItems[item].onAwake()
        }
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    close() {
        if (this.musicIsPreview) {
            this.shell.room.updateMusic(this.shell.room.music)
        }
        this.visible = false
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
        this.interface.prompt.showError(this.crumbs.getError('54'))
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
