import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'
/* START OF COMPILED CODE */

export default class WildlifeDen extends IglooScene {
    constructor() {
        super(`WildlifeDen-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /** @type {Phaser.GameObjects.Image} */
        this.floor
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [608, 728]
        this.wallSpawn = [496, 182]
        this.wallBounds = [308, 1072]
        this.floorFrame = 15

        this.isPreview = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('wildlifeden-pack', 'client/media/igloos/buildings/sprites/wildlifeden/wildlifeden-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(760, 480, 'wildlifeden', 'bg-lower')

        // bg_upper
        this.add.image(760, 480, 'wildlifeden', 'bg_upper')

        // fg
        const fg = this.add.image(760, 964.9881605335881, 'wildlifeden', 'fg')
        fg.setOrigin(0.5, 1.005196000555821)

        // lists
        const sort = [fg]

        this.floor = floor
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
