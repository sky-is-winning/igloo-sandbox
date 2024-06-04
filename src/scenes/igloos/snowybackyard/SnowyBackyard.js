import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class SnowyBackyard extends IglooScene {
    constructor() {
        super('SnowyBackyard')

        /** @type {Phaser.GameObjects.Image} */
        this.floor

        /* START-USER-CTR-CODE */

        

        this.floorSpawn = [1080, 490]
        this.wallSpawn = [970, 200]
        this.wallBounds = [410, 1110]
        this.floorFrame = 3

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('snowybackyard-pack', 'client/media/igloos/buildings/sprites/snowybackyard/snowybackyard-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(760, 480, 'snowybackyard', 'bg')

        // door
        const door = this.add.image(680, 318, 'snowybackyard', 'door')
        door.setOrigin(0.4387755102040816, 0.8557692307692307)

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
