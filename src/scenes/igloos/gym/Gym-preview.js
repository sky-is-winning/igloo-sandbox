import IglooScene from '../IglooScene'
import {Button} from '@components/components'
/* START OF COMPILED CODE */

export default class Gym extends IglooScene {
    constructor() {
        super(`Gym-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /** @type {Phaser.GameObjects.Image} */
        this.floor2
        /** @type {Phaser.GameObjects.Image} */
        this.floor1
        /** @type {Phaser.GameObjects.Image} */
        this.floor

        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 780]
        this.wallSpawn = [760, 480]
        this.wallBounds = [510, 1110]
        this.floorFrame = 6

        this.isPreview = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('gym-pack', 'client/media/igloos/buildings/sprites/gym/gym-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor2
        const floor2 = this.add.image(1342, 742, 'gym', 'wood')
        floor2.setOrigin(0.5084745762711864, 0.5185185185185185)
        floor2.flipX = true

        // floor1
        const floor1 = this.add.image(177, 742, 'gym', 'wood')
        floor1.setOrigin(0.5084745762711864, 0.5185185185185185)

        // floor
        const floor = this.add.image(760, 753, 'gym', 'floor')
        floor.setOrigin(0.5004095004095004, 0.5)

        // wall
        const wall = this.add.image(760, 400, 'gym', 'wall')
        wall.setOrigin(0.5003903200624512, 0.5)

        // door
        const door = this.add.image(339, 571, 'gym', 'door')
        door.setOrigin(0.5084745762711864, 0.5)

        this.floor2 = floor2
        this.floor1 = floor1
        this.floor = floor

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
