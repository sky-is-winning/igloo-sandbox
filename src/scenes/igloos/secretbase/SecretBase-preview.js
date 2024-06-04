import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'
/* START OF COMPILED CODE */

export default class SecretBase extends IglooScene {
    constructor() {
        super(`SecretBase-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /** @type {Phaser.GameObjects.Image} */
        this.floor
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort

        /* START-USER-CTR-CODE */

        

        this.floorSpawn = [690, 800]
        this.wallSpawn = [680, 150]
        this.wallBounds = [700, 980]
        this.floorFrame = 16

        this.isPreview = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('secretbase-pack', 'client/media/igloos/buildings/sprites/secretbase/secretbase-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(760, 480, 'secretbase', 'bg')

        // door
        const door = this.add.image(325.6088772069406, 600.855949782962, 'secretbase', 'door')
        door.setOrigin(0.44981884232132413, 0.7537489823151257)

        // fg
        const fg = this.add.image(760, 966.1266806085654, 'secretbase', 'fg')
        fg.setOrigin(0.5, 1.0063819589672556)

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
