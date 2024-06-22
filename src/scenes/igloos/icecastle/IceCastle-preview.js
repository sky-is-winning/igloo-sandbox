import IglooScene from '../IglooScene'
import {Button} from '@components/components'

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
        const door = this.add.image(758.8427484645825, 639.3832146853995, 'icecastle', 'door')
        door.setOrigin(0.5202249919188555, 0.9532472547969204)

        // floor
        const floor = this.add.image(760, 480, 'icecastle', 'bg-upper')

        // fg
        this.add.image(760, 480, 'icecastle', 'fg')

        // door (components)
        new Button(door)

        this.floor = floor

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
