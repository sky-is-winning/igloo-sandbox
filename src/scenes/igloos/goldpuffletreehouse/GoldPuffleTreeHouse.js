import IglooScene from '../IglooScene'
import {Button} from '@components/components'

/* START OF COMPILED CODE */

export default class GoldPuffleTreeHouse extends IglooScene {
    constructor() {
        super('GoldPuffleTreeHouse')

        /** @type {Phaser.GameObjects.Image} */
        this.floor
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [580, 634]
        this.wallSpawn = [1040, 250]
        this.wallBounds = [460, 1060]
        this.floorFrame = 15

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('goldpuffletreehouse-igloo-pack', 'assets/media/igloos/buildings/sprites/goldpuffletreehouse/goldpuffletreehouse-igloo-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(760, 480, 'goldpuffletreehouse-igloo', 'bg')

        // fg
        const fg = this.add.image(760, 1023.7504585647256, 'goldpuffletreehouse-igloo', 'fg')
        fg.setOrigin(0.5, 1.0664067276715892)

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
