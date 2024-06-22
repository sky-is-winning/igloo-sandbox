import IglooScene from '../IglooScene'
import {Button} from '@components/components'

/* START OF COMPILED CODE */

export default class Cave extends IglooScene {
    constructor() {
        super(`Cave-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /** @type {Phaser.GameObjects.Image} */
        this.floor

        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 760]
        this.wallSpawn = [760, 260]
        this.wallBounds = [250, 1200]
        this.floorFrame = 2

        this.isPreview = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('cave-pack', 'client/media/igloos/buildings/sprites/cave/cave-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(760, 480, 'cave', 'bg-lower')

        // bg_upper
        this.add.image(760, 480, 'cave', 'bg-upper')

        // door
        const door = this.add.image(236.2735848853143, 535.8254715251716, 'cave', 'door')
        door.setOrigin(0.584305317139221, 0.8826479200251047)

        // door (components)
        new Button(door)

        this.floor = floor

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
