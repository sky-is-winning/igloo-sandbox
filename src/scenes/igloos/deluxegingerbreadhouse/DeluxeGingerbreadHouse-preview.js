import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'
/* START OF COMPILED CODE */

export default class DeluxeGingerbreadHouse extends IglooScene {
    constructor() {
        super(`DeluxeGingerbreadHouse-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /** @type {Phaser.GameObjects.Image} */
        this.floor
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [1000, 686]
        this.wallSpawn = [654, 440]
        this.wallBounds = [440, 1054]
        this.floorFrame = 4

        this.isPreview = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('deluxegingerbreadhouse-pack', 'client/media/igloos/buildings/sprites/deluxegingerbreadhouse/deluxegingerbreadhouse-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(760, 480, 'deluxegingerbreadhouse', 'bg-lower')

        // door
        const door = this.add.image(368.1365162807567, 681.4832530391134, 'deluxegingerbreadhouse', 'door')
        door.setOrigin(0.6099529227129287, 0.8524573872770201)

        // bg_upper
        this.add.image(760, 480, 'deluxegingerbreadhouse', 'bg-upper')

        // fg
        const fg = this.add.image(760, 971.4395405059269, 'deluxegingerbreadhouse', 'fg')
        fg.setOrigin(0.5, 1.0119161880270071)

        // lists
        const sort = [fg]

        // door (components)
        new Button(door)
        new MoveTo(door)

        this.floor = floor
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
