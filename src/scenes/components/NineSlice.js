import EventComponent from './EventComponent'

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class NineSlice extends EventComponent {
    constructor(gameObject) {
        super(gameObject)

        /** @type {Phaser.GameObjects.GameObject} */
        this.gameObject
        /** @type {{key:string,frame?:string|number}} */
        this.texture = {key: 'prompt', frame: 'window'}
        /** @type {number} */
        this.corner = 10

        this.gameObject = gameObject
        gameObject['__NineSlice'] = this

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {NineSlice} */
    static getComponent(gameObject) {
        return gameObject['__NineSlice']
    }

    /* START-USER-CODE */

    start() {
        if (this.gameObject.visible == false) return

        this.gameObject.nineSliceObject = this.scene.add.ninePatchContainer(this.gameObject.x, this.gameObject.y, this.gameObject.width, this.gameObject.height, this.texture.key, this.texture.frame)
        this.gameObject.nineSliceObject.marginLeft = this.corner
        this.gameObject.nineSliceObject.marginRight = this.corner
        this.gameObject.nineSliceObject.marginTop = this.corner
        this.gameObject.nineSliceObject.marginBottom = this.corner

        // Set correct position inside container
        if (this.gameObject.parentContainer) {
            let parent = this.gameObject.parentContainer
            let index = parent.getIndex(this.gameObject)

            parent.addAt(this.gameObject.nineSliceObject, index)
        }

        this.gameObject.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
