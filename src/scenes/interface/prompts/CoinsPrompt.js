import BaseContainer from '@scenes/base/BaseContainer'

import {Interactive, LocalisedString, Button, SimpleButton} from '@components/components'

import SingleButton from './buttons/SingleButton'
import PromptStamp from '@scenes/interface/prompts/PromptStamp'
import StampLoader from '@engine/loaders/StampLoader'

/* START OF COMPILED CODE */

export default class CoinsPrompt extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        /** @type {Phaser.GameObjects.Rectangle} */
        this.block
        /** @type {NinePatchContainer} */
        this.bg
        /** @type {Phaser.GameObjects.Image} */
        this.icon
        /** @type {Phaser.GameObjects.Image} */
        this.doneBtn
        /** @type {Phaser.GameObjects.Text} */
        this.totalCoins
        /** @type {Phaser.GameObjects.Text} */
        this.coinsEarned
        /** @type {Phaser.GameObjects.Image} */
        this.coins_right
        /** @type {Phaser.GameObjects.Image} */
        this.coins_left
        /** @type {Phaser.GameObjects.Text} */
        this.gameName
        /** @type {Phaser.GameObjects.Text} */
        this.useCoins
        /** @type {Phaser.GameObjects.Text} */
        this.buyClothes
        /** @type {Phaser.GameObjects.Text} */
        this.adoptPet
        /** @type {Phaser.GameObjects.Text} */
        this.decorateIgloo
        /** @type {Phaser.GameObjects.Text} */
        this.done
        /** @type {Phaser.GameObjects.Image} */
        this.divider
        /** @type {Phaser.GameObjects.Image} */
        this.stampIcon
        /** @type {Phaser.GameObjects.Text} */
        this.stampNumber
        /** @type {Phaser.GameObjects.Text} */
        this.bonusLeft
        /** @type {Phaser.GameObjects.Text} */
        this.bonusRight
        /** @type {Phaser.GameObjects.Container} */
        this.bonus
        /** @type {Phaser.GameObjects.Container} */
        this.stampLayer
        /** @type {Phaser.GameObjects.Triangle} */
        this.nextPageBtn
        /** @type {Phaser.GameObjects.Triangle} */
        this.prevPageBtn
        /** @type {NinePatchContainer} */
        this.stampInfoBg
        /** @type {Phaser.GameObjects.Text} */
        this.stampInfoTitle
        /** @type {Phaser.GameObjects.Text} */
        this.stampInfoBody
        /** @type {Phaser.GameObjects.Container} */
        this.stampInfo

        this.visible = false

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960)
        block.isFilled = true
        block.fillColor = 0
        block.fillAlpha = 0.2
        this.add(block)

        // bg
        const bg = scene.add.ninePatchContainer(0, -40, 900, 700, 'endscreens', 'bg')
        bg.marginLeft = 40
        bg.marginTop = 300
        bg.marginRight = 40
        bg.marginBottom = 350
        this.add(bg)

        // icon
        const icon = scene.add.image(0, -265, 'endscreens', 'icons/aquagrabber')
        this.add(icon)

        // doneBtn
        const doneBtn = scene.add.image(0, 220, 'endscreens', 'close_btn')
        this.add(doneBtn)

        // totalCoins
        const totalCoins = scene.add.text(0, -86, '', {})
        totalCoins.setOrigin(0.5, 0.5)
        totalCoins.text = 'Your total coins: 8888888'
        totalCoins.setStyle({color: '#005cc6ff', fontFamily: 'cpBurbankSmall', fontSize: '30px', fontStyle: 'bold', stroke: '#ffffffff'})
        this.add(totalCoins)

        // coinsEarned
        const coinsEarned = scene.add.text(0, -121, '', {})
        coinsEarned.setOrigin(0.5, 0.5)
        coinsEarned.text = 'Coins Earned: 88888'
        coinsEarned.setStyle({color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '45px', fontStyle: 'bold', stroke: '#003d7cff', strokeThickness: 8})
        this.add(coinsEarned)

        // coins_right
        const coins_right = scene.add.image(320, -111, 'endscreens', 'coins')
        this.add(coins_right)

        // coins_left
        const coins_left = scene.add.image(-320, -111, 'endscreens', 'coins')
        coins_left.scaleX = -1
        this.add(coins_left)

        // gameName
        const gameName = scene.add.text(0, -201, '', {})
        gameName.setOrigin(0.5, 0.5)
        gameName.text = 'Aqua Grabber'
        gameName.setStyle({color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '50px', fontStyle: 'bold', stroke: '#003d7cff', strokeThickness: 10})
        this.add(gameName)

        // useCoins
        const useCoins = scene.add.text(0, 2, '', {})
        useCoins.setOrigin(0.5, 0.5)
        useCoins.text = 'Use your coins to:'
        useCoins.setStyle({color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '30px', fontStyle: 'bold', stroke: '#ffffffff'})
        this.add(useCoins)

        // buyClothes
        const buyClothes = scene.add.text(-270, 146, '', {})
        buyClothes.setOrigin(0.5, 0.5)
        buyClothes.text = 'Buy new clothing'
        buyClothes.setStyle({color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '20px', fontStyle: 'bold', stroke: '#ffffffff', 'shadow.offsetX': 1, 'shadow.offsetY': 2, 'shadow.fill': true})
        this.add(buyClothes)

        // adoptPet
        const adoptPet = scene.add.text(0, 146, '', {})
        adoptPet.setOrigin(0.5, 0.5)
        adoptPet.text = 'Adopt a pet'
        adoptPet.setStyle({color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '20px', fontStyle: 'bold', stroke: '#ffffffff', 'shadow.offsetX': 1, 'shadow.offsetY': 2, 'shadow.fill': true})
        this.add(adoptPet)

        // decorateIgloo
        const decorateIgloo = scene.add.text(270, 146, '', {})
        decorateIgloo.setOrigin(0.5, 0.5)
        decorateIgloo.text = 'Decorate your igloo'
        decorateIgloo.setStyle({color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '20px', fontStyle: 'bold', stroke: '#ffffffff', 'shadow.offsetX': 1, 'shadow.offsetY': 2, 'shadow.fill': true})
        this.add(decorateIgloo)

        // done
        const done = scene.add.text(0, 220, '', {})
        done.setOrigin(0.5, 0.5)
        done.text = 'Done'
        done.setStyle({color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '45px', fontStyle: 'bold', stroke: '#003d7cff', strokeThickness: 8})
        this.add(done)

        // divider
        const divider = scene.add.image(0, -95, 'endscreens', 'divider')
        divider.visible = false
        this.add(divider)

        // stampIcon
        const stampIcon = scene.add.image(-33, -95, 'endscreens', 'stamps')
        stampIcon.visible = false
        this.add(stampIcon)

        // stampNumber
        const stampNumber = scene.add.text(12, -95, '', {})
        stampNumber.setOrigin(0.5, 0.5)
        stampNumber.visible = false
        stampNumber.text = '22/22'
        stampNumber.setStyle({color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '20px', fontStyle: 'bold', stroke: '#ffffffff'})
        this.add(stampNumber)

        // bonus
        const bonus = scene.add.container(-320, -180)
        bonus.visible = false
        this.add(bonus)

        // bonusLeft
        const bonusLeft = scene.add.text(21, -7, '', {})
        bonusLeft.angle = -29.999999999999996
        bonusLeft.setOrigin(0.5, 0.5)
        bonusLeft.text = 'x2'
        bonusLeft.setStyle({color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '45px', fontStyle: 'bold', stroke: '#7c5900ff', strokeThickness: 8})
        bonus.add(bonusLeft)

        // bonusRight
        const bonusRight = scene.add.text(621, -9, '', {})
        bonusRight.angle = 29.999999999999996
        bonusRight.setOrigin(0.5, 0.5)
        bonusRight.text = 'x2'
        bonusRight.setStyle({color: '#ffffffff', fontFamily: 'cpBurbankSmall', fontSize: '45px', fontStyle: 'bold', stroke: '#7c5900ff', strokeThickness: 8})
        bonus.add(bonusRight)

        // stampLayer
        const stampLayer = scene.add.container(0, 0)
        this.add(stampLayer)

        // nextPageBtn
        const nextPageBtn = scene.add.triangle(360, -25, 0, 0, 64, 100, 128, 0)
        nextPageBtn.scaleX = 0.3683477972678916
        nextPageBtn.scaleY = -0.2091128471890994
        nextPageBtn.angle = 90
        nextPageBtn.visible = false
        nextPageBtn.isFilled = true
        this.add(nextPageBtn)

        // prevPageBtn
        const prevPageBtn = scene.add.triangle(-360, -25, 0, 0, 64, 100, 128, 0)
        prevPageBtn.scaleX = 0.3683477972678916
        prevPageBtn.scaleY = -0.2091128471890994
        prevPageBtn.angle = -90
        prevPageBtn.visible = false
        prevPageBtn.isFilled = true
        this.add(prevPageBtn)

        // stampInfo
        const stampInfo = scene.add.container(-892.9088989293418, -525.656192362609)
        stampInfo.visible = false
        this.add(stampInfo)

        // stampInfoBg
        const stampInfoBg = scene.add.ninePatchContainer(2.908898929341774, -82.343807637391, 250, 140, 'endscreens', 'hover')
        stampInfoBg.marginLeft = 15
        stampInfoBg.marginTop = 10
        stampInfoBg.marginRight = 15
        stampInfoBg.marginBottom = 25
        stampInfo.add(stampInfoBg)

        // stampInfoTitle
        const stampInfoTitle = scene.add.text(-122.09110107065823, -141.343807637391, '', {})
        stampInfoTitle.text = 'Aunt Arctic'
        stampInfoTitle.setStyle({color: '#000000ff', fixedWidth: 250, fontFamily: 'cpBurbankSmall', fontSize: '20px', fontStyle: 'bold'})
        stampInfoTitle.setPadding({left: 15, right: 15})
        stampInfo.add(stampInfoTitle)

        // stampInfoBody
        const stampInfoBody = scene.add.text(-122.09110107065823, -106.343807637391, '', {})
        stampInfoBody.text = 'Be in the same room as Aunt Arctic'
        stampInfoBody.setStyle({color: '#606060ff', fixedWidth: 250, fontFamily: 'cpBurbankSmall', fontSize: '17px'})
        stampInfoBody.setPadding({left: 15, right: 15})
        stampInfoBody.setWordWrapWidth(210)
        stampInfo.add(stampInfoBody)

        // block (components)
        new Interactive(block)

        // doneBtn (components)
        const doneBtnButton = new Button(doneBtn)
        doneBtnButton.callback = () => {
            this.visible = false
        }

        // useCoins (components)
        const useCoinsLocalisedString = new LocalisedString(useCoins)
        useCoinsLocalisedString.id = 'mgprompt-usecoins'

        // buyClothes (components)
        const buyClothesLocalisedString = new LocalisedString(buyClothes)
        buyClothesLocalisedString.id = 'mgprompt-buyclothing'

        // adoptPet (components)
        const adoptPetLocalisedString = new LocalisedString(adoptPet)
        adoptPetLocalisedString.id = 'mgprompt-adoptpet'

        // decorateIgloo (components)
        const decorateIglooLocalisedString = new LocalisedString(decorateIgloo)
        decorateIglooLocalisedString.id = 'mgprompt-decorateigloo'

        // done (components)
        const doneLocalisedString = new LocalisedString(done)
        doneLocalisedString.id = 'mgprompt-okay'

        // nextPageBtn (components)
        const nextPageBtnSimpleButton = new SimpleButton(nextPageBtn)
        nextPageBtnSimpleButton.callback = () => this.nextPage()

        // prevPageBtn (components)
        const prevPageBtnSimpleButton = new SimpleButton(prevPageBtn)
        prevPageBtnSimpleButton.callback = () => this.prevPage()

        this.block = block
        this.bg = bg
        this.icon = icon
        this.doneBtn = doneBtn
        this.totalCoins = totalCoins
        this.coinsEarned = coinsEarned
        this.coins_right = coins_right
        this.coins_left = coins_left
        this.gameName = gameName
        this.useCoins = useCoins
        this.buyClothes = buyClothes
        this.adoptPet = adoptPet
        this.decorateIgloo = decorateIgloo
        this.done = done
        this.divider = divider
        this.stampIcon = stampIcon
        this.stampNumber = stampNumber
        this.bonusLeft = bonusLeft
        this.bonusRight = bonusRight
        this.bonus = bonus
        this.stampLayer = stampLayer
        this.nextPageBtn = nextPageBtn
        this.prevPageBtn = prevPageBtn
        this.stampInfoBg = stampInfoBg
        this.stampInfoTitle = stampInfoTitle
        this.stampInfoBody = stampInfoBody
        this.stampInfo = stampInfo

        /* START-USER-CTR-CODE */
        this.scene = scene
        this.scene.stampLoader = new StampLoader(this.scene)
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    show(game, coins) {
        game = game.toLowerCase()
        for (var x in this.stamps) {
            this.stamps[x].destroy()
        }

        let category

        switch (game) {
            case 'aquagrabber':
                category = 13
                break
            case 'astrobarrier':
                category = 14
                break
            case 'card':
                category = 38
                break
            case 'cjfire':
                category = 32
                break
            case 'cjsnow':
                category = 60
                break
            case 'cjwater':
                category = 34
                break
            case 'cartsurfer':
                category = 28
                break
            case 'catchinwaves':
                category = 15
                break
            case 'icefishing':
                category = 52
                break
            case 'jetpackadventure':
                category = 11
                break
            case 'pizzatron':
                category = 54
                break
            case 'pufflelaunch':
                category = 48
                break
            case 'pufflescape':
                category = 57
                break
            case 'pufflerescue':
                category = 19
                break
            case 'smoothie':
                category = 58
                break
            case 'sysdef':
                category = 46
                break
            case 'thinice':
                category = 16
                break
            case 'treasurehunt':
                category = 56
                break
            default:
                category = 0
        }

        if (game == 'Gift from a moderator!') {
            this.icon.setFrame('icons/aquagrabber')
            this.gameName.text = 'Gift from a moderator!'
        } else {
            this.icon.setFrame(`icons/${game}`)
            this.gameName.text = this.shell.getString(game)
        }

        this.coinsEarned.text = this.shell.getString(`mgprompt-coinsearned,${coins.toString()}`)
        this.totalCoins.text = this.shell.getString(`mgprompt-coinstotal,${this.shell.client.coins.toString()}`)
        this.visible = true

        this.nextPageBtn.visible = false
        this.prevPageBtn.visible = false

        if (category == 0) {
            this.stampNumber.visible = false
            this.stampIcon.visible = false
            this.divider.visible = false
            this.bonus.visible = false

            this.done.y = 220
            this.decorateIgloo.y = 146
            this.adoptPet.y = 146
            this.buyClothes.y = 146
            this.useCoins.y = 2
            this.gameName.y = -201
            this.coins_left.y = -111
            this.coins_right.y = -111
            this.coinsEarned.y = -121
            this.totalCoins.y = -86
            this.doneBtn.y = 220
            this.icon.y = -265

            this.bg.resize(900, 700)
            return
        } else {
            this.stampNumber.visible = true
            this.stampIcon.visible = true
            this.divider.visible = true

            this.done.y = 283
            this.decorateIgloo.y = 216
            this.adoptPet.y = 216
            this.buyClothes.y = 216
            this.useCoins.y = 76
            this.gameName.y = -290
            this.coins_left.y = -185
            this.coins_right.y = -185
            this.coinsEarned.y = -195
            this.totalCoins.y = -160
            this.doneBtn.y = 283
            this.icon.y = -336

            this.bg.resize(900, 850)
        }

        let categoryStamps = this.getCategoryStamps(category)

        if (categoryStamps[0].length > 1 && categoryStamps[1] == categoryStamps[0].length) {
            this.bonus.visible = true
        } else {
            this.bonus.visible = false
        }

        this.stampNumber.text = `${categoryStamps[1]}/${categoryStamps[0].length}`

        if (categoryStamps[0].length > 1) {
            this.getStamps(categoryStamps[0])
        }
    }

    getCategoryStamps(category) {
        let categoryStamps = []
        let ownedCategoryStamps = []
        for (var stamp in this.crumbs.stamps) {
            if (this.crumbs.stamps[stamp].groupid == category && !this.crumbs.stamps[stamp].disabled) {
                categoryStamps.push(stamp)
                if (this.shell.client.stamps.includes(parseInt(stamp))) ownedCategoryStamps.push(stamp)
            }
        }
        return [categoryStamps, ownedCategoryStamps.length]
    }

    getStamps(stamps) {
        let posArray = [-300, -225, -150, -75, 0, 75, 150, 225, 300]

        this.stamps = []

        for (var id in stamps) {
            let pos = this.stamps.length
            while (pos > 8) {
                pos -= 9
            }
            let stamp = new PromptStamp(this, posArray[pos], -25, stamps[id])
            if (this.stamps.length > 8) {
                stamp.visible = false
            }
            this.stampLayer.add(stamp)
            this.stamps.push(stamp)
        }

        this.page = 1
        if (this.stamps.length > 9) {
            this.nextPageBtn.visible = true
        }
    }

    nextPage() {
        this.page = this.page + 1
        for (var x in this.stamps) {
            if (x >= this.page * 9 - 9 && x < this.page * 9) {
                this.stamps[x].visible = true
            } else {
                this.stamps[x].visible = false
            }
        }
        if (this.page == Math.ceil(this.stamps.length / 9)) {
            this.nextPageBtn.visible = false
        } else {
            this.nextPageBtn.visible = true
        }
        this.prevPageBtn.visible = true
    }

    prevPage() {
        this.page = this.page - 1
        for (var x in this.stamps) {
            if (x >= this.page * 9 - 9 && x < this.page * 9) {
                this.stamps[x].visible = true
            } else {
                this.stamps[x].visible = false
            }
        }
        if (this.page == 1) {
            this.prevPageBtn.visible = false
        }
        this.nextPageBtn.visible = true
    }

    onStampOver(stamp, x, y) {
        this.stampInfo.visible = true
        this.stampInfo.x = x
        this.stampInfo.y = y
        this.stampInfoTitle.text = this.crumbs.stamps[stamp].name
        this.stampInfoBody.text = this.crumbs.stamps[stamp].description
    }

    onStampOut() {
        this.stampInfo.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
