import EventComponent from './EventComponent'

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class LocalisedString extends EventComponent {
    constructor(gameObject) {
        super(gameObject)

        /** @type {Phaser.GameObjects.Text} */
        this.gameObject
        /** @type {string} */
        this.id = ''

        this.gameObject = gameObject
        gameObject['__LocalisedString'] = this

        /* START-USER-CTR-CODE */

        this.gameObject.setString = this.setText.bind(this)

        /* END-USER-CTR-CODE */
    }

    /** @returns {LocalisedString} */
    static getComponent(gameObject) {
        return gameObject['__LocalisedString']
    }

    /* START-USER-CODE */
    get text() {
        return this.gameObject.scene.crumbs.getString(this.id) ? this.gameObject.scene.crumbs.getString(this.id) : `${this.id}`
    }

    start() {
        this.gameObject.text = this.text
    }

    setText(string) {
        this.id = string
        this.gameObject.text = this.text
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
