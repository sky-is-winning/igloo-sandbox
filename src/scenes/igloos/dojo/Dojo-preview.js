import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class Dojo extends IglooScene {
    constructor() {
        super(`Dojo-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /** @type {Phaser.GameObjects.Image} */
        this.floor

        /* START-USER-CTR-CODE */

        this.floorSpawn = [758, 724]
        this.wallSpawn = [756, 506]
        this.wallBounds = [416, 1100]
        this.floorFrame = 5

        this.isPreview = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('dojo-pack', 'client/media/igloos/buildings/sprites/dojo/dojo-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(760, 480, 'dojo', 'bg')

        // door
        const door = this.add.image(521.9537353515625, 607.684457871213, 'dojo', 'door')
        door.setOrigin(0.48974231971909804, 0.8447979348966812)

        // door (components)
        new Button(door)
        new MoveTo(door)

        this.floor = floor

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
