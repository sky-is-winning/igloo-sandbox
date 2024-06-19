import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class MagicalHideout extends IglooScene {
    constructor() {
        super(`MagicalHideout-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort

        /* START-USER-CTR-CODE */

        this.floorSpawn = [720, 720]
        this.wallSpawn = [860, 320]
        this.wallBounds = [520, 1200]
        this.floorFrame = 16

        this.isPreview = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('magicalhideout-pack', 'client/media/igloos/buildings/sprites/magicalhideout/magicalhideout-pack.json')
    }

    /** @returns {void} */
    _create() {
        // bg
        this.add.image(760, 480, 'magicalhideout', 'bg')

        // fg
        const fg = this.add.image(760, 999.630172000273, 'magicalhideout', 'fg')
        fg.setOrigin(0.5, 1.041281429166951)

        // lists
        const sort = [fg]

        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
