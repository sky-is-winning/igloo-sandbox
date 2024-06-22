import IglooScene from '../IglooScene'
import {Button} from '@components/components'

/* START OF COMPILED CODE */

export default class InHalf extends IglooScene {
    constructor() {
        super('InHalf')

        /** @type {Phaser.GameObjects.Image} */
        this.floor
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort

        /* START-USER-CTR-CODE */

        this.floorSpawn = [940, 620]
        this.wallSpawn = [680, 376]
        this.wallBounds = [646, 920]
        this.floorFrame = 2

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('inhalf-pack', 'client/media/igloos/buildings/sprites/inhalf/inhalf-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(760, 480, 'inhalf', 'bg-lower')

        // bg_upper
        this.add.image(760, 480, 'inhalf', 'bg-upper')

        // fg
        const fg = this.add.image(760, 997.435028120684, 'inhalf', 'fg')
        fg.setOrigin(0.5, 1.0389948209590458)

        // fg_again
        const fg_again = this.add.image(760, 1003.5585195777335, 'inhalf', 'fg-again')
        fg_again.setOrigin(0.5, 1.0453734578934724)

        // lists
        const sort = [fg_again, fg]

        this.floor = floor
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
