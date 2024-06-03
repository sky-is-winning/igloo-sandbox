import FurnitureIconLoader from '@engine/loaders/FurnitureIconLoader'
import FurnitureLoader from '@engine/loaders/FurnitureLoader'

import {SimpleButton, Interactive} from '@components/components'

/* START OF COMPILED CODE */

export default class IglooItem extends Phaser.GameObjects.Container {
    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0)

        // bg
        const bg = scene.add.image(0, 0, 'iglooedit-new', 'item-bg')
        this.add(bg)

        // quantity
        const quantity = scene.add.image(38, -38, 'iglooedit-new', 'item-amount')
        this.add(quantity)

        // quantityText
        const quantityText = scene.add.text(38, -38, '', {})
        quantityText.setOrigin(0.5, 0.5)
        quantityText.text = '99'
        quantityText.setStyle({align: 'center', color: '#464646ff', fixedWidth: 35, fontFamily: 'cpBurbankSmall', fontSize: '18px', fontStyle: 'bold'})
        this.add(quantityText)

        // cover
        const cover = scene.add.image(0, 0, 'iglooedit-new', 'item-bg')
        cover.visible = false
        cover.alpha = 0.5
        cover.alphaTopLeft = 0.5
        cover.alphaTopRight = 0.5
        cover.alphaBottomLeft = 0.5
        cover.alphaBottomRight = 0.5
        cover.tintFill = true
        this.add(cover)

        // bg (components)
        const bgSimpleButton = new SimpleButton(bg)
        bgSimpleButton.hoverCallback = () => this.onOver()
        bgSimpleButton.hoverOutCallback = () => this.onOut()

        // cover (components)
        new Interactive(cover)

        this.bg = bg
        this.quantity = quantity
        this.quantityText = quantityText
        this.cover = cover

        /* START-USER-CTR-CODE */
        this.loader = new FurnitureIconLoader(scene)
        this.furnitureLoader = new FurnitureLoader(scene)
        this.scene = scene
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    bg
    /** @type {Phaser.GameObjects.Image} */
    quantity
    /** @type {Phaser.GameObjects.Text} */
    quantityText
    /** @type {Phaser.GameObjects.Image} */
    cover

    /* START-USER-CODE */

    setItem(type, id, quantity) {
        this.quantityText.visible = false
        this.quantity.visible = false
        if (this.scene.textures.exists(`furniture/icon/${type}/${id}`)) {
            return this.addItem(type, id, quantity)
        }
        this.loader.loadIcon(type, id, () => {
            this.addItem(type, id, quantity)
        })
    }

    addItem(type, id, quantity) {
        if (!this.scene) return
        const trueQuantity = quantity
        quantity = this.calculateQuantity(type, id, quantity)
        this.item = {type, id, quantity, trueQuantity}

        this.icon = this.scene.add.image(0, 0, `furniture/icon/${type}/${id}`)
        switch (type) {
            case 'igloo':
                this.icon.scale = 0.25
                break
            case 'furniture':
                this.icon.scale = 0.5
                break
            case 'flooring':
                this.icon.scale = 0.8
                break
        }
        this.add(this.icon)

        this.updateQuantity()

        this.bringToTop(this.quantity)
        this.bringToTop(this.quantityText)
        this.bringToTop(this.cover)

        this.bg.__SimpleButton.start()
        this.bg.on('pointerdown', () => this.onClick())
    }

    calculateQuantity(type, id, quantity) {
        if (!this.scene) return 0
        if (type != 'furniture') return quantity
        for (let f of this.scene.shell.room.furnitureSprites) {
            if (f.id == id) {
                quantity--
            }
        }
        return quantity
    }

    updateQuantity() {
        if (!this.item) return
        this.item.quantity = this.calculateQuantity(this.item.type, this.item.id, this.item.trueQuantity)
        if (parseInt(this.item.quantity) > 1) {
            this.quantityText.visible = true
            this.quantity.visible = true
            this.quantityText.text = this.item.quantity
            this.cover.visible = false
        } else {
            this.quantityText.visible = false
            this.quantity.visible = false
            if (parseInt(this.item.quantity) < 1) {
                this.cover.visible = true
            } else {
                this.cover.visible = false
            }
        }
    }

    onOver() {
        this.bg.tintTopLeft = 0xb5b5b5
        this.bg.tintTopRight = 0xb5b5b5
        this.bg.tintBottomLeft = 0xb5b5b5
        this.bg.tintBottomRight = 0xb5b5b5
    }

    onOut() {
        this.bg.tintTopLeft = 0xffffff
        this.bg.tintTopRight = 0xffffff
        this.bg.tintBottomLeft = 0xffffff
        this.bg.tintBottomRight = 0xffffff
    }

    onClick() {
        let pointer = this.scene.input.activePointer

        if (this.item.type == 'furniture') {
            this.furnitureLoader.loadFurniture(this.item.id, null, pointer.x, pointer.y, 1, 1, this)

            this.item.quantity--
            if (this.item.quantity > 1) {
                this.quantityText.text = this.item.quantity
            } else if (this.item.quantity == 1) {
                this.quantityText.visible = false
                this.quantity.visible = false
            } else {
                this.cover.visible = true
                this.bringToTop(this.cover)
            }
        } else if (this.item.type == 'igloo') {
            this.scene.shell.room.updateIgloo(this.item.id)
        } else if (this.item.type == 'flooring') {
            this.scene.shell.room.updateFlooring(this.item.id)
        } else if (this.item.type == 'location') {
            this.scene.shell.room.updateLocation(this.item.id)
        }
    }

    setSprite(sprite) {
        let pointer = this.scene.input.activePointer
        sprite.x = pointer.x
        sprite.y = pointer.y
        sprite.hover(pointer)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
