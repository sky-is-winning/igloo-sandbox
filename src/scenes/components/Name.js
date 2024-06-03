import EventComponent from './EventComponent'

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Name extends EventComponent {
    constructor(gameObject) {
        super(gameObject)

        /** @type {Phaser.GameObjects.GameObject} */
        this.gameObject
        /** @type {number} */
        this.id = 0

        this.gameObject = gameObject
        gameObject['__Name'] = this

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {Name} */
    static getComponent(gameObject) {
        return gameObject['__Name']
    }

    /* START-USER-CODE */

    start() {
        super.start()
        this.gameObject.text = this.getName(this.id)
    }

    getName(id) {
        if (this.scene.crumbs.items[id]) {
            return this.scene.crumbs.items[id].name
        }
        return 'Error'
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
