import IglooScene from '../IglooScene'
import {Button} from '@components/components'

/* START OF COMPILED CODE */

export default class MermaidCove extends IglooScene {
    constructor() {
        super(`MermaidCove-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /** @type {Phaser.GameObjects.Image} */
        this.floor
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort

        /* START-USER-CTR-CODE */

        this.floorSpawn = [616, 512]
        this.wallSpawn = [850, 216]
        this.wallBounds = [260, 1140]
        this.floorFrame = 14

        this.isPreview = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('mermaidcove-pack', 'client/media/igloos/buildings/sprites/mermaidcove/mermaidcove-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(760, 480, 'mermaidcove', 'bg')

        // bridge
        const bridge = this.add.image(478.71526559673634, 686.5007154026904, 'mermaidcove', 'bridge')
        bridge.setOrigin(0.5517666298233039, 0.09254678465999935)

        // lists
        const sort = [bridge]

        this.floor = floor
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
