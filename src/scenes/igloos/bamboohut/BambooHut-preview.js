import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'
/* START OF COMPILED CODE */

export default class BambooHut extends IglooScene {
    constructor() {
        super(`BambooHut-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /** @type {Phaser.GameObjects.Image} */
        this.floor

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [770, 750]
        this.wallSpawn = [790, 400]
        this.wallBounds = [520, 1050]
        this.floorFrame = 4

        this.isPreview = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('bamboohut-pack', 'client/media/igloos/buildings/sprites/bamboohut/bamboohut-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(769, 691, 'bamboohut', 'floor')
        floor.setOrigin(0.5004468275245755, 0.5017421602787456)

        // door
        const door = this.add.image(424, 474, 'bamboohut', 'door')
        door.setOrigin(0.5054945054945055, 0.5)

        // wall
        const wall = this.add.image(760, 402, 'bamboohut', 'wall')
        wall.setOrigin(0.5004101722723544, 0.5)

        this.floor = floor

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
