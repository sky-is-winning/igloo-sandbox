import IglooScene from '../IglooScene'
import {Button} from '@components/components'

/* START OF COMPILED CODE */

export default class Starship extends IglooScene {
    constructor() {
        super('Starship')

        /** @type {Phaser.GameObjects.Image} */
        this.floor
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [760, 740]
        this.wallSpawn = [760, 320]
        this.wallBounds = [470, 1050]
        this.floorFrame = 15

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('starship-igloo-pack', 'assets/media/igloos/buildings/sprites/starship/starship-igloo-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(760, 480, 'starship-igloo', 'bg-lower')

        // bg_upper
        this.add.image(760, 480, 'starship-igloo', 'bg-upper')

        // fg
        const fg = this.add.image(760, 968.0459003755292, 'starship-igloo', 'fg')
        fg.setOrigin(0.5, 1.0083811462245096)

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
