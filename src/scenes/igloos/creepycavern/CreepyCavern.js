import IglooScene from '../IglooScene'
import {Button} from '@components/components'

/* START OF COMPILED CODE */

export default class CreepyCavern extends IglooScene {
    constructor() {
        super('CreepyCavern')

        /** @type {Phaser.GameObjects.Image} */
        this.floor
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort

        /* START-USER-CTR-CODE */

        this.floorSpawn = [720, 720]
        this.wallSpawn = [720, 720]
        this.wallBounds = [400, 340]
        this.floorFrame = 16

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('creepycavern-pack', 'client/media/igloos/buildings/sprites/creepycavern/creepycavern-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(760, 480, 'creepycavern', 'bg-lower')

        // door
        const door = this.add.image(648.734090229998, 399.4263519559652, 'creepycavern', 'door')
        door.setOrigin(0.5228700011111012, 0.7960958252944188)

        // bg_upper
        this.add.image(760, 480, 'creepycavern', 'bg-upper')

        // fg
        const fg = this.add.image(760, 1016.4177455978373, 'creepycavern', 'fg')
        fg.setOrigin(0.5, 1.0587684849977472)

        // lists
        const sort = [fg]

        // door (components)

        new Button(door)

        this.floor = floor
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
