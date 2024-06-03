import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'
/* START OF COMPILED CODE */

export default class SpringPalace extends IglooScene {
    constructor() {
        super(`SpringPalace-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /** @type {Phaser.GameObjects.Image} */
        this.floor
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [760, 540]
        this.wallSpawn = [740, 140]
        this.wallBounds = [470, 1050]
        this.floorFrame = 15

        this.isPreview = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('springpalace-pack', 'client/media/igloos/buildings/sprites/springpalace/springpalace-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(760, 480, 'springpalace', 'bg')

        // door
        const door = this.add.image(175.03652281259787, 492.9391286456702, 'springpalace', 'door')
        door.setOrigin(0.20568323939819524, 0.6733095540872878)

        // fg
        const fg = this.add.image(760, 977.2632550553474, 'springpalace', 'fg')
        fg.setOrigin(0.5, 1.0179825573493202)

        // lists
        const sort = [fg]

        // door (components)
        new Button(door)
        new MoveTo(door)

        this.floor = floor
        this.sort = sort

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
