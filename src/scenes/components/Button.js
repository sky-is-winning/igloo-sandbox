import SimpleButton from './SimpleButton'

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Button extends SimpleButton {
    constructor(gameObject) {
        super(gameObject)

        /** @type {Phaser.GameObjects.Sprite} */
        this.gameObject
        /** @type {any} */
        this.hoverCallback = null
        /** @type {any} */
        this.hoverOutCallback = null
        /** @type {any} */
        this.callback = () => {}
        /** @type {boolean} */
        this.pixelPerfect = false
        /** @type {boolean} */
        this.isLocalised = false

        this.gameObject = gameObject
        gameObject['__Button'] = this

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {Button} */
    static getComponent(gameObject) {
        return gameObject['__Button']
    }

    /* START-USER-CODE */

    get spriteName() {
        let frameName = this.gameObject.frame ? this.gameObject.frame.name : this.gameObject.textureFrame

        if (frameName.includes('-es')) {
            frameName = frameName.replace('-es', '')
        } else if (frameName.includes('-pt')) {
            frameName = frameName.replace('-pt', '')
        } else if (frameName.includes('-en')) {
            frameName = frameName.replace('-en', '')
        }

        if (frameName.includes('-hover')) {
            frameName = frameName.replace('-hover', '')
        } else if (frameName.includes('-active')) {
            frameName = frameName.replace('-active', '')
        }

        return frameName
    }

    set spriteName(name) {
        this.gameObject.setFrame(name)
    }

    get textureKey() {
        if (this.gameObject.textureKey && this.gameObject.textureKey != '__DEFAULT') return this.gameObject.textureKey
        return this.gameObject.texture.key
    }

    get texture() {
        if (this.gameObject.texture) return this.gameObject.texture
        return this.gameObject.scene.shell.textures.get(this.textureKey)
    }

    get language() {
        for (let lang of ['en', 'es', 'pt']) {
            if (window.location.pathname.includes(lang)) {
                return lang
            }
        }
        return 'en'
    }

    get overFrame() {
        let frame = this.isLocalised ? `${this.spriteName}-${this.language}-hover` : `${this.spriteName}-hover`
        if (this.texture.frames[frame]) {
            return frame
        }
        return this.outFrame
    }

    get outFrame() {
        let frame = this.isLocalised ? `${this.spriteName}-${this.language}` : this.spriteName
        if (this.texture.frames[frame]) {
            return frame
        }
        return this.spriteName
    }

    get downFrame() {
        let frame = this.isLocalised ? `${this.spriteName}-${this.language}-active` : `${this.spriteName}-active`
        if (this.texture.frames[frame]) {
            return frame
        }
        return this.overFrame
    }

    start() {
        super.start()
        this.gameObject.on('pointerdown', (pointer) => this.onDown(pointer))
    }

    onOver() {
        this.gameObject.setTexture(this.textureKey, this.overFrame, false, false)
        super.onOver()
    }

    onOut() {
        this.gameObject.setTexture(this.textureKey, this.outFrame, false, false)
        super.onOut()
    }

    onDown(pointer) {
        if (pointer.button != 0) {
            return
        }

        this.gameObject.setTexture(this.textureKey, this.downFrame, false, false)
    }

    onUp(pointer) {
        if (pointer.button != 0) {
            return
        }

        this.gameObject.setTexture(this.textureKey, this.overFrame, false, false)

        super.onUp(pointer)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
