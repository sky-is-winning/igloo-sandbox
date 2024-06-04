import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class Theatre extends IglooScene {
    constructor() {
        super('Theatre')

        /** @type {Phaser.GameObjects.Image} */
        this.floor

        /* START-USER-CTR-CODE */

        this.floorSpawn = [754, 698]
        this.wallSpawn = [804, 472]
        this.wallBounds = [510, 1044]
        this.floorFrame = 12

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('theatre-pack', 'client/media/igloos/buildings/sprites/theatre/theatre-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(760, 480, 'theatre', 'bg')

        // door
        const door = this.add.image(205.3322599034576, 638.7384703087979, 'theatre', 'door')
        door.setOrigin(0.5700189907853581, 0.6648899182937672)

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
