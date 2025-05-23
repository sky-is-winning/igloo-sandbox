import IglooScene from '../IglooScene'
import {Button} from '@components/components'

/* START OF COMPILED CODE */

export default class PinkPuffleTreeHouse extends IglooScene {
    constructor() {
        super('PinkPuffleTreeHouse')

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
        this.load.pack('pinkpuffletreehouse-igloo-pack', 'assets/media/igloos/buildings/sprites/pinkpuffletreehouse/pinkpuffletreehouse-igloo-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        this.add.image(760, 480, 'pinkpuffletreehouse-igloo', 'bg')

        // fg
        const fg = this.add.image(760, 959.7032354118448, 'pinkpuffletreehouse-igloo', 'fg')
        fg.setOrigin(0.5, 0.9996908702206717)

        // lists
        const sort = [fg]

        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
