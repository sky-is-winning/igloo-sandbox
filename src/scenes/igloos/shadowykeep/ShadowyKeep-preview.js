import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class ShadowyKeep extends IglooScene {
    constructor() {
        super(`ShadowyKeep-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /** @type {Phaser.GameObjects.Image} */
        this.floor

        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 800]
        this.wallSpawn = [760, 430]
        this.wallBounds = [4420, 1100]
        this.floorFrame = 8

        this.isPreview = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('shadowykeep-pack', 'client/media/igloos/buildings/sprites/shadowykeep/shadowykeep-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg_lower
        this.add.image(758, 639, 'shadowykeep', 'bg-lower')

        // floor
        const floor = this.add.image(760, 480, 'shadowykeep', 'bg-upper')

        // door
        this.add.image(754, 552, 'shadowykeep', 'door')

        this.floor = floor

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
