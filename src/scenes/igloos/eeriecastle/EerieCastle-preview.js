import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'
/* START OF COMPILED CODE */

export default class EerieCastle extends IglooScene {
    constructor() {
        super(`EerieCastle-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /** @type {Phaser.GameObjects.Image} */
        this.floor
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [600, 200]
        this.wallSpawn = [880, 350]
        this.wallBounds = [230, 1130]
        this.floorFrame = 16

        this.isPreview = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('eeriecastle-pack', 'client/media/igloos/buildings/sprites/eeriecastle/eeriecastle-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(760, 480, 'eeriecastle', 'bg')

        // door
        const door = this.add.image(1121.3259676302932, 381.53758708663105, 'eeriecastle', 'door')
        door.setOrigin(0.5649858591891015, 0.8138015803309352)

        // bg_upper
        this.add.image(1199, 354, 'eeriecastle', 'bg-upper')

        // fg
        const fg = this.add.image(760, 988.2498154572869, 'eeriecastle', 'fg')
        fg.setOrigin(0.5, 1.029426865557406)

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
