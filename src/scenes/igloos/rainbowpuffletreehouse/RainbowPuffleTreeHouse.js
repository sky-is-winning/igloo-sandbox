import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class RainbowPuffleTreeHouse extends IglooScene {
    constructor() {
        super('RainbowPuffleTreeHouse')

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
        this.load.pack('rainbowpuffletreehouse-pack', 'client/media/igloos/buildings/sprites/rainbowpuffletreehouse/rainbowpuffletreehouse-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(760, 480, 'rainbowpuffletreehouse', 'bg')

        // fg
        const fg = this.add.image(760, 962.3233904207661, 'rainbowpuffletreehouse', 'fg')
        fg.setOrigin(0.5, 1.0024201983549648)

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
