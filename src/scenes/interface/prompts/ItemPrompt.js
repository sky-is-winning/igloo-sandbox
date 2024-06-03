import BaseContainer from '@scenes/base/BaseContainer'

import {Interactive, NineSlice} from '@components/components'

import DualButtons from './buttons/DualButtons'
import ItemPromptLoader from '@engine/loaders/ItemPromptLoader'

/* START OF COMPILED CODE */

export default class ItemPrompt extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        /** @type {NinePatchContainer} */
        this.bg
        /** @type {Phaser.GameObjects.Text} */
        this.text
        /** @type {DualButtons} */
        this.dual

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

        // text
        const text = scene.add.text(0, 0, '', {})
        text.setOrigin(0.5, 0.5)
        text.text = 'You have found a party hat.\nWould you like to pick it up?'
        text.setStyle({align: 'center', color: '#000000', fixedWidth: 628, fontFamily: 'cpBurbankSmall', fontSize: '32px'})
        this.add(text)

        // dual
        const dual = new DualButtons(scene, 0, 130)
        this.add(dual)

        // block (components)
        new Interactive(block)

        this.bg = bg
        this.text = text
        this.dual = dual

        /* START-USER-CTR-CODE */

        this.text.setWordWrapWidth(616, true)

        this.item // Active item ID
        this.icon // Icon sprite
        this.type

        this.loader = new ItemPromptLoader(scene, this)

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    showItem(item, isMedals = false) {
        if (this.inventoryIncludes(item)) {
            return this.interface.prompt.showError(this.shell.crumbs.getError('1'))
        }
        this.airtower.sendXt('i#gi', `items%${item}%${isMedals ? 1 : 0}`)
        this.airtower.events.once('gii', this.showAfterEvent.bind(this))
    }

    showAfterEvent(args) {
        let crumb = {
            name: this.crumbs.items[args[1]].name,
            cost: args[3],
            available: args[4],
            medals: args[6]
        }
        this.show(args[1], crumb, 'clothing')
    }

    showFurniture(item) {
        this.show(item, this.crumbs.furniture[item], 'furniture')
    }

    showLocation(item) {
        this.show(item, this.crumbs.locations[item], 'location')
    }

    showIgloo(item) {
        this.show(item, this.crumbs.igloos[item], 'igloo')
    }

    showFlooring(item) {
        this.show(item, this.crumbs.flooring[item], 'flooring')
    }

    show(item, crumb, type) {
        if (!crumb) {
            return
        }

        if (!crumb.available && type == 'clothing') {
            return this.interface.prompt.showError(this.crumbs.getError('2'))
        }

        this.item = item
        this.type = type
        this.medals = crumb.medals || 0

        this.text.text = this.getText(crumb.name, crumb.cost, crumb.medals)
        this.visible = true

        this.loader.loadIcon(item)
    }

    inventoryIncludes(item) {
        return this.shell.client.hasItem(item)
    }

    getText(name, cost, medals) {
        if (medals > 0) {
            return this.crumbs.getString(`medals-item-popup,${name},${medals},${this.shell.client.medals}`)
        } else if (cost < 1) {
            return this.crumbs.getString(`free-item-popup,${name}`)
        } else {
            return this.crumbs.getString(`paid-item-popup,${name},${cost},${this.shell.client.coins}`)
        }
    }

    callback() {
        if (this.item) {
            if (this.medals > 0) {
                this.airtower.sendXt('i#aim', this.item)
            } else {
                this.sendAddItem()
            }
        }

        this.visible = false
    }

    noCallback() {
        this.visible = false
    }

    sendAddItem() {
        switch (this.type) {
            case 'clothing':
                this.airtower.sendXt('i#ai', this.item)
                break
            case 'furniture':
                this.airtower.sendXt('g#af', this.item)
                break
            case 'flooring':
                this.airtower.sendXt('g#bg', this.item)
                break
            case 'igloo':
                this.airtower.sendXt('g#bi', this.item)
                break
            case 'location':
                this.airtower.sendXt('g#bl', this.item)
                break
            default:
                break
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
