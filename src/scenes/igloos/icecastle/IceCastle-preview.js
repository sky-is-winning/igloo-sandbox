import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'
/* START OF COMPILED CODE */

export default class IceCastle extends IglooScene {
    constructor() {
        super(`IceCastle-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

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
        this.load.pack('icecastle-pack', 'client/media/igloos/buildings/sprites/icecastle/icecastle-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg_lower
        this.add.image(760, 634, 'icecastle', 'bg-lower')

        // door
        this.add.image(755, 551, 'icecastle', 'door')

        // fg
        const fg = this.add.image(760, 480, 'icecastle', 'fg')

        // floor
        const floor = this.add.image(760, 480, 'icecastle', 'bg-upper')

        this.floor = floor

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
