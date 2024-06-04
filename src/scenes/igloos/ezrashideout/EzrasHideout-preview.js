import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'
/* START OF COMPILED CODE */

export default class EzrasHideout extends IglooScene {
    constructor() {
        super(`EzrasHideout-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /** @type {Phaser.GameObjects.Image} */
        this.floor
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort

        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 740]
        this.wallSpawn = [760, 320]
        this.wallBounds = [470, 1050]
        this.floorFrame = 15

        this.isPreview = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('ezrashideout-pack', 'client/media/igloos/buildings/sprites/ezrashideout/ezrashideout-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(760, 480, 'ezrashideout', 'bg-lower')

        // bg_upper
        this.add.image(760, 480, 'ezrashideout', 'bg-upper')

        // door
        const door = this.add.image(392.46917750651227, 374.994848909551, 'ezrashideout', 'door')
        door.setOrigin(0.5228235362270544, 0.8269032650367347)

        // fg
        const fg = this.add.image(760, 985.707708299273, 'ezrashideout', 'fg')
        fg.setOrigin(0.5, 1.0267788628117427)

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
