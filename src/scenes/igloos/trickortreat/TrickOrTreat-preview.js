import IglooScene from '../IglooScene'
import {Button} from '@components/components'

/* START OF COMPILED CODE */

export default class TrickOrTreat extends IglooScene {
    constructor() {
        super(`TrickOrTreat-preview-${Date.now()}${Phaser.Math.Between(0,10000)}`)
        

        /** @type {Phaser.GameObjects.Image} */
        this.floor

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [714, 624]
        this.wallSpawn = [722, 326]
        this.wallBounds = [488, 958]
        this.floorFrame = 14

        this.isPreview = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('trickortreat-igloo-pack', 'assets/media/igloos/buildings/sprites/trickortreat/trickortreat-igloo-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(760, 480, 'trickortreat-igloo', 'bg-lower')

        // bg_upper
        this.add.image(760, 480, 'trickortreat-igloo', 'bg-upper')

        this.floor = floor

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
