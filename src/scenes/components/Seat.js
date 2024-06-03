import EventComponent from './EventComponent'

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Seat extends EventComponent {
    constructor(gameObject) {
        super(gameObject)

        /** @type {Phaser.GameObjects.Ellipse} */
        this.gameObject
        /** @type {string} */
        this.direction = 'south'

        this.gameObject = gameObject
        gameObject['__Seat'] = this

        /* START-USER-CTR-CODE */
        gameObject.isButton = true
        /* END-USER-CTR-CODE */
    }

    /** @returns {Seat} */
    static getComponent(gameObject) {
        return gameObject['__Seat']
    }

    /* START-USER-CODE */

    get shell() {
        return this.gameObject.scene.shell
    }

    get frame() {
        switch (this.direction) {
            case 'south':
                return 17
            case 'southwest':
                return 18
            case 'west':
                return 19
            case 'northwest':
                return 20
            case 'north':
                return 21
            case 'northeast':
                return 22
            case 'east':
                return 23
            case 'southeast':
                return 24
            default:
                return 17
        }
    }

    start() {
        this.gameObject.setInteractive({
            cursor: 'pointer',
            pixelPerfect: this.pixelPerfect
        })
        this.gameObject.on('pointerup', (pointer) => this.onPointerUp(pointer))

        this.gameObject.isFilled = true
        this.gameObject.fillColor = 1499385
        this.gameObject.fillAlpha = localStorage.debugMode == 'true' ? 0.5 : 0
        this.gameObject.depth = this.gameObject.y
    }

    async onPointerUp(pointer) {
        if (pointer.button != 0) {
            return
        }

        await this.shell.client.penguin.move(this.gameObject.x, this.gameObject.y)

        this.shell.client.penguin.afterMove = () => {
            if (!this.atSeatPosition) return
            this.shell.client.penguin.playFrame(this.frame)
            this.shell.airtower.sendXt('u#sf', `${true}%${this.frame}`)
            this.shell.client.lockRotation = true
        }
    }

    get atSeatPosition() {
        return this.shell.isNearPos(this.gameObject.x, this.gameObject.y)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
