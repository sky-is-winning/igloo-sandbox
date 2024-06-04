import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'
/* START OF COMPILED CODE */

export default class RedPuffleTreeHouse extends IglooScene {
    constructor() {
        super(`RedPuffleTreeHouse-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /** @type {Phaser.GameObjects.Image} */
        this.floor
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort

        /* START-USER-CTR-CODE */

        this.floorSpawn = [580, 634]
        this.wallSpawn = [1040, 250]
        this.wallBounds = [460, 1060]
        this.floorFrame = 15

        this.isPreview = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('redpuffletreehouse-pack', 'client/media/igloos/buildings/sprites/redpuffletreehouse/redpuffletreehouse-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(760, 480, 'redpuffletreehouse', 'bg')

        // fg
        const fg = this.add.image(760, 967.6529306464103, 'redpuffletreehouse', 'fg')
        fg.setOrigin(0.5, 1.0079718027566773)

        // lists
        const sort = [fg]

        this.floor = floor
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
