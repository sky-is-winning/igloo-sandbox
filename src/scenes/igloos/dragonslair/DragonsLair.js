import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class DragonsLair extends IglooScene {
    constructor() {
        super('DragonsLair')

        /** @type {Phaser.GameObjects.Image} */
        this.floor

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [760, 800]
        this.wallSpawn = [760, 430]
        this.wallBounds = [420, 1100]
        this.floorFrame = 8

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('dragonslair-pack', 'client/media/igloos/buildings/sprites/dragonslair/dragonslair-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(760, 480, 'dragonslair', 'bg-lower-lower')

        // bg_lower_upper
        this.add.image(760, 480, 'dragonslair', 'bg-lower-upper')

        // bg_upper
        this.add.image(760, 637, 'dragonslair', 'bg-upper')

        // door
        this.add.image(760, 578, 'dragonslair', 'door')

        this.floor = floor

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
