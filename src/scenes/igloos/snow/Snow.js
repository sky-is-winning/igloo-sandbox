import IglooScene from '../IglooScene'
import {Button} from '@components/components'

/* START OF COMPILED CODE */

export default class Snow extends IglooScene {
    constructor() {
        super('Snow')

        /** @type {Phaser.GameObjects.Image} */
        this.floor

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            triggers: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [760, 760]
        this.wallSpawn = [750, 320]
        this.wallBounds = [580, 1000]
        this.floorFrame = 1

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('snow-pack', 'assets/media/igloos/buildings/sprites/snow/snow-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(765, 639, 'snow', 'floor')
        floor.setOrigin(0.5006337135614702, 0.5)

        // wall_1
        const wall_1 = this.add.image(570, 378, 'snow', 'wall_1')
        wall_1.setOrigin(0.5010266940451745, 0.5)

        // wall_2
        this.add.image(972, 388, 'snow', 'wall_2')

        // door
        const door = this.add.image(500, 547, 'snow', 'door')
        door.setOrigin(0.5818181818181818, 0.8883495145631068)

        // door (components)
        const doorButton = new Button(door)
        doorButton.activeFrame = false

        this.floor = floor

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
