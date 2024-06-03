import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class GhostlyCavern extends IglooScene {
    constructor() {
        super('GhostlyCavern')

        /** @type {Phaser.GameObjects.Image} */
        this.floor
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [720, 720]
        this.wallSpawn = [720, 720]
        this.wallBounds = [400, 340]
        this.floorFrame = 16

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('ghostlycavern-pack', 'client/media/igloos/buildings/sprites/ghostlycavern/ghostlycavern-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(760, 480, 'ghostlycavern', 'bg')

        // door
        const door = this.add.image(644.2223192223685, 385.112469113158, 'ghostlycavern', 'door')
        door.setOrigin(0.539632606511901, 0.8754847806601638)

        // fg
        const fg = this.add.image(760, 969.9014391839448, 'ghostlycavern', 'fg')
        fg.setOrigin(0.5, 1.0103139991499426)

        // lists
        const sort = [fg]

        // door (components)
        new Button(door)
        new MoveTo(door)

        this.floor = floor
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
