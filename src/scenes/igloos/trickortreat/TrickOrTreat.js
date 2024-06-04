import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class TrickOrTreat extends IglooScene {
    constructor() {
        super('TrickOrTreat')

        /** @type {Phaser.GameObjects.Image} */
        this.floor

        /* START-USER-CTR-CODE */

        

        this.floorSpawn = [714, 624]
        this.wallSpawn = [722, 326]
        this.wallBounds = [488, 958]
        this.floorFrame = 14

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('trickortreat-pack', 'client/media/igloos/buildings/sprites/trickortreat/trickortreat-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(760, 480, 'trickortreat', 'bg-lower')

        // bg_upper
        this.add.image(760, 480, 'trickortreat', 'bg-upper')

        this.floor = floor

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
