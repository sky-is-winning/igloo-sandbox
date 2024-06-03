import Phaser from 'phaser'
export default class BaseScene extends Phaser.Scene {
    get crumbs() {
        return this.game.crumbs
    }

    get airtower() {
        return this.game.airtower
    }

    get interface() {
        return this.scene.get('InterfaceController')
    }

    get shell() {
        return this.scene.get('Shell')
    }

    getString(...args) {
        return args.map((id) => this.crumbs.getString(id)).join(' ')
    }

    create() {
        if (window.updateScaling) window.updateScaling()

        const addImage = this.add.image.bind(this.add)
        const addSprite = this.add.sprite.bind(this.add)

        this.add.image = (...args) => {
            const texture = args[2]
            const frame = args[3]
            const image = addImage(...args)
            this.checkForMissingTexture(image, texture, frame)
            return image
        }

        this.add.sprite = (...args) => {
            const texture = args[2]
            const frame = args[3]
            const image = addSprite(...args)
            this.checkForMissingTexture(image, texture, frame)
            return image
        }

        if (this._create) this._create()
    }

    checkForMissingTexture(image, texture, frame) {
        if (image.texture.key == '__MISSING' && texture != '__MISSING') {
            console.warn(`Missing texture: ${texture} ${frame}`)
            image.setTexture(texture, frame)
            if (image.texture.key == '__MISSING') {
                setTimeout(() => this.checkForMissingTexture(image, texture, frame), 100)
            }
        }
    }
}
