import SimpleButton from './SimpleButton'

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Button extends SimpleButton {

    constructor(gameObject) {
        super(gameObject);

        /** @type {Phaser.GameObjects.Sprite} */
        this.gameObject;
        /** @type {any} */
        this.hoverCallback = null;
        /** @type {any} */
        this.hoverOutCallback = null;
        /** @type {any} */
        this.callback = () => {};
        /** @type {boolean} */
        this.activeFrame = true;
        /** @type {boolean} */
        this.pixelPerfect = false;


        this.gameObject = gameObject;
        gameObject["__Button"] = this;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {Button} */
    static getComponent(gameObject) {
        return gameObject["__Button"];
    }


    /* START-USER-CODE */

    get spriteName() {
        let currentName = this.gameObject.frame ? this.gameObject.frame.name : this.gameObject.textureFrame
        if (currentName.includes('-hover')) {
            return currentName.replace('-hover', '')
        }
        if (currentName.includes('-active')) {
            return currentName.replace('-active', '')
        }
        return currentName
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

    get overFrame() {
        if (this.texture.frames[`${this.spriteName}-hover`]) {
            return this.texture.frames[`${this.spriteName}-hover`]
        }
        return this.outFrame
    }

    get outFrame() {
        return this.texture.frames[this.spriteName]
    }

    get downFrame() {
        if (this.texture.frames[`${this.spriteName}-active`]) {
            return this.texture.frames[`${this.spriteName}-active`]
        }
        return this.overFrame
    }

    start() {
        super.start()
        this.gameObject.on('pointerdown', (pointer) => this.onDown(pointer))
    }

    onOver() {
        this.gameObject.setFrame(this.overFrame, false, false)
        super.onOver()
    }

    onOut() {
        this.gameObject.setFrame(this.outFrame, false, false)
        super.onOut()
    }

    onDown(pointer) {
        if (pointer.button != 0) {
            return
        }

        this.gameObject.setFrame(this.downFrame, false, false)
    }

    onUp(pointer) {
        if (pointer.button != 0) {
            return
        }

        this.gameObject.setFrame(this.overFrame, false, false)

        super.onUp(pointer)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
