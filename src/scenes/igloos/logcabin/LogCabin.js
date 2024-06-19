import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class LogCabin extends IglooScene {
    constructor() {
        super('LogCabin')

        /** @type {Phaser.GameObjects.Image} */
        this.floor2
        /** @type {Phaser.GameObjects.Image} */
        this.floor1

        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 728]
        this.wallSpawn = [760, 450]
        this.wallBounds = [490, 1030]
        this.floorFrame = 5

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('logcabin-pack', 'client/media/igloos/buildings/sprites/logcabin/logcabin-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor2
        const floor2 = this.add.image(760, 703, 'logcabin', 'floor_1')

        // floor1
        const floor1 = this.add.image(748, 838, 'logcabin', 'floor_2')
        floor1.setOrigin(0.5, 0.5070422535211268)

        // wall
        const wall = this.add.image(760, 426, 'logcabin', 'wall')
        wall.setOrigin(0.5003441156228493, 0.5006896551724138)

        // door
        this.add.image(421, 555, 'logcabin', 'door')

        this.floor2 = floor2
        this.floor1 = floor1

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
