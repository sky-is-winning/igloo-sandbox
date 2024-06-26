import IglooScene from '../IglooScene'
import {Button} from '@components/components'

/* START OF COMPILED CODE */

export default class Restaurant extends IglooScene {
    constructor() {
        super(`Restaurant-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /** @type {Phaser.GameObjects.Image} */
        this.floor

        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 780]
        this.wallSpawn = [760, 480]
        this.wallBounds = [410, 1110]
        this.floorFrame = 12

        this.isPreview = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('restaurant-pack', 'client/media/igloos/buildings/sprites/restaurant/restaurant-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(760, 480, 'restaurant', 'bg')

        // door
        const door = this.add.image(284.95653595912785, 620.56131911667, 'restaurant', 'door')
        door.setOrigin(0.589335999796656, 0.6799509688101575)

        // door (components)
        new Button(door)

        this.floor = floor

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
