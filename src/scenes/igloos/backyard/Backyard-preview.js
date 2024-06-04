import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'
/* START OF COMPILED CODE */

export default class Backyard extends IglooScene {
    constructor() {
        super(`Backyard-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /** @type {Phaser.GameObjects.Image} */
        this.floor

        /* START-USER-CTR-CODE */

        this.floorSpawn = [1080, 490]
        this.wallSpawn = [970, 200]
        this.wallBounds = [410, 1110]
        this.floorFrame = 3

        this.isPreview = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(760, 480, 'backyard', 'bg')

        // door
        const door = this.add.image(677.7786964525617, 314.9572825204803, 'backyard', 'door')
        door.setOrigin(0.39645371736436524, 0.8507561659638476)

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
