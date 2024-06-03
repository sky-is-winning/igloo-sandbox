import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'
/* START OF COMPILED CODE */

export default class FreshBakedGingerbreadHouse extends IglooScene {
    constructor() {
        super(`FreshBakedGingerbreadHouse-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

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
        this.load.pack('freshbakedgingerbreadhouse-pack', 'client/media/igloos/buildings/sprites/freshbakedgingerbreadhouse/freshbakedgingerbreadhouse-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(760, 480, 'freshbakedgingerbreadhouse', 'bg-lower')

        // door
        const door = this.add.image(369.69045232017226, 672.6479067928531, 'freshbakedgingerbreadhouse', 'door')
        door.setOrigin(0.5904115178401657, 0.8117415059578482)

        // bg_upper
        this.add.image(760, 480, 'freshbakedgingerbreadhouse', 'bg-upper')

        // fg
        const fg = this.add.image(760, 963.3509157454945, 'freshbakedgingerbreadhouse', 'fg')
        fg.setOrigin(0.5, 1.0034905372348901)

        // lists
        const sort = [fg]

        // door (components)
        new MoveTo(door)
        new Button(door)

        this.floor = floor
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
