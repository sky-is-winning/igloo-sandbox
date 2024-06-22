import IglooScene from '../IglooScene'
import {Button} from '@components/components'

/* START OF COMPILED CODE */

export default class Schoolhouse extends IglooScene {
    constructor() {
        super(`Schoolhouse-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /** @type {Phaser.GameObjects.Image} */
        this.floor
        /** @type {Phaser.GameObjects.Image} */
        this.door
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort

        this.floorSpawn = [760, 740]
        this.wallSpawn = [760, 320]
        this.wallBounds = [470, 1050]
        this.floorFrame = 16
        this.isPreview = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('schoolhouse-pack', 'client/media/igloos/buildings/sprites/schoolhouse/schoolhouse-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(0, 0, 'schoolhouse', 'bg')
        floor.setOrigin(0, 0)

        // door
        const door = this.add.image(349.806860413513, 422.78523116485115, 'schoolhouse', 'door')
        door.setOrigin(0.5218785081236379, 0.8172383677927505)

        // roof
        const roof = this.add.image(0, 960, 'schoolhouse', 'roof')
        roof.setOrigin(0, 1)

        // lists
        const sort = [roof]

        // door (components)
        new Button(door)

        this.floor = floor
        this.door = door
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
