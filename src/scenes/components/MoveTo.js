/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MoveTo {
    constructor(gameObject) {
        /** @type {Phaser.GameObjects.GameObject} */
        this.gameObject
        /** @type {number} */
        this.x = 0
        /** @type {number} */
        this.y = 0

        this.gameObject = gameObject
        gameObject['__MoveTo'] = this

        /* START-USER-CTR-CODE */

        // If x/y is 0 then use gameObject coordinate
        this.x = this.x ? this.x : this.getX()
        this.y = this.y ? this.y : this.getY()

        this.gameObject.on('pointerup', (pointer) => this.onPointerUp(pointer))

        /* END-USER-CTR-CODE */
    }

    /** @returns {MoveTo} */
    static getComponent(gameObject) {
        return gameObject['__MoveTo']
    }

    /* START-USER-CODE */

    getX() {
        let curObject = this.gameObject
        let x = this.gameObject.x
        while (curObject.parentContainer) {
            x += curObject.parentContainer.x
            curObject = curObject.parentContainer
        }
        return x
    }

    getY() {
        let curObject = this.gameObject
        let y = this.gameObject.y
        while (curObject.parentContainer) {
            y += curObject.parentContainer.y
            curObject = curObject.parentContainer
        }
        return y + 1 // +1 so you're below the object
    }

    onPointerUp(pointer) {
        if (pointer.button != 0) {
            return
        }

        this.gameObject.scene.shell.client.penguin.move(this.x, this.y)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
