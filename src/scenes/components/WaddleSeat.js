// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class WaddleSeat {
    constructor(gameObject) {
        /** @type {Phaser.GameObjects.GameObject} */
        this.gameObject
        /** @type {string} */
        this.sitdirection = 'north'

        this.gameObject = gameObject
        gameObject['__WaddleSeat'] = this

        /* START-USER-CTR-CODE */
        setTimeout(() => {
            gameObject.sitFrame = this.frame
        }, 100)
        /* END-USER-CTR-CODE */
    }

    /** @returns {WaddleSeat} */
    static getComponent(gameObject) {
        return gameObject['__WaddleSeat']
    }

    /* START-USER-CODE */

    get frame() {
        switch (this.sitdirection.toLowerCase()) {
            case 'south':
            case 's':
                return 17
            case 'southwest':
            case 'sw':
                return 18
            case 'west':
            case 'w':
                return 19
            case 'northwest':
            case 'nw':
                return 20
            case 'north':
            case 'n':
                return 21
            case 'northeast':
            case 'ne':
                return 22
            case 'east':
            case 'e':
                return 23
            case 'southeast':
            case 'se':
                return 24
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
