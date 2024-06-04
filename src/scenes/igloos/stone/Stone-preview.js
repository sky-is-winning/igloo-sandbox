import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'
/* START OF COMPILED CODE */

export default class Stone extends IglooScene {
    constructor() {
        super(`Stone-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /** @type {Phaser.GameObjects.Image} */
        this.floor

        /* START-USER-CTR-CODE */

        

        this.floorSpawn = [760, 760]
        this.wallSpawn = [750, 320]
        this.wallBounds = [580, 1000]
        this.floorFrame = 1

        this.isPreview = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('stone-pack', 'client/media/igloos/buildings/sprites/stone/stone-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(765, 639, 'stone', 'floor')
        floor.setOrigin(0.5006337135614702, 0.5)

        // wall_1
        const wall_1 = this.add.image(570, 378, 'stone', 'wall_1')
        wall_1.setOrigin(0.5010266940451745, 0.5)

        // wall_2
        this.add.image(972, 388, 'stone', 'wall_2')

        // door
        this.add.image(491, 467, 'stone', 'door')

        this.floor = floor

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
