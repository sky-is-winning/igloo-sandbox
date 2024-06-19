import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'
/* START OF COMPILED CODE */

export default class SplitLevel extends IglooScene {
    constructor() {
        super(`SplitLevel-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /** @type {Phaser.GameObjects.Image} */
        this.floor2
        /** @type {Phaser.GameObjects.Image} */
        this.floor1

        /* START-USER-CTR-CODE */

        this.floorSpawn = [1080, 490]
        this.wallSpawn = [970, 200]
        this.wallBounds = [410, 1110]
        this.floorFrame = 3

        this.isPreview = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('splitlevel-pack', 'client/media/igloos/buildings/sprites/splitlevel/splitlevel-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor2
        const floor2 = this.add.image(760, 630, 'splitlevel', 'floor')
        floor2.setOrigin(0.5003861003861004, 0.5)

        // floor1
        const floor1 = this.add.image(763, 667, 'splitlevel', 'stairs_top')
        floor1.setOrigin(0.5, 0.5035971223021583)

        // door
        this.add.image(235, 556, 'splitlevel', 'door')

        // wall_1
        const wall_1 = this.add.image(757, 380, 'splitlevel', 'wall_1')
        wall_1.setOrigin(0.5003615328994938, 0.5)

        // stairs
        this.add.image(777, 667, 'splitlevel', 'stairs')

        // wall_2
        const wall_2 = this.add.image(925, 811, 'splitlevel', 'wall_2')
        wall_2.setOrigin(0.5, 0.5015197568389058)

        this.floor2 = floor2
        this.floor1 = floor1

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
