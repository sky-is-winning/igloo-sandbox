import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'
/* START OF COMPILED CODE */

export default class VIPPenthouse extends IglooScene {
    constructor() {
        super(`VIPPenthouse-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /** @type {Phaser.GameObjects.Image} */
        this.floor
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort

        /* START-USER-CTR-CODE */

        this.floorSpawn = [490, 600]
        this.wallSpawn = [680, 150]
        this.wallBounds = [490, 1330]
        this.floorFrame = 16

        this.isPreview = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('vippenthouse-pack', 'client/media/igloos/buildings/sprites/vippenthouse/vippenthouse-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(760, 480, 'vippenthouse', 'bg')

        // fg
        const fg = this.add.image(760, 965.9602341346081, 'vippenthouse', 'fg')
        fg.setOrigin(0.5, 1.00620857722355)

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
