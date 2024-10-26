import IglooScene from '../IglooScene'
import {Button} from '@components/components'

/* START OF COMPILED CODE */

export default class GhostlyCavern extends IglooScene {
    constructor() {
        super(`GhostlyCavern-preview-${Date.now()}${Phaser.Math.Between(0,10000)}`)
        

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

        this.isPreview = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('ghostlycavern-igloo-pack', 'assets/media/igloos/buildings/sprites/ghostlycavern/ghostlycavern-igloo-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(760, 480, 'ghostlycavern-igloo', 'bg')

        // door
        const door = this.add.image(644.2223192223685, 385.112469113158, 'ghostlycavern-igloo', 'door')
        door.setOrigin(0.539632606511901, 0.8754847806601638)

        // fg
        const fg = this.add.image(760, 969.9014391839448, 'ghostlycavern-igloo', 'fg')
        fg.setOrigin(0.5, 1.0103139991499426)

        // lists
        const sort = [fg]

        // door (components)
        const doorButton = new Button(door)
        doorButton.activeFrame = false

        this.floor = floor
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
