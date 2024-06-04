import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class SplitLevelSnow extends IglooScene {
    constructor() {
        super('SplitLevelSnow')

        /** @type {Phaser.GameObjects.Image} */
        this.floor

        /* START-USER-CTR-CODE */

        

        this.floorSpawn = [1080, 490]
        this.wallSpawn = [970, 200]
        this.wallBounds = [410, 1110]
        this.floorFrame = 3

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('splitlevelsnow-pack', 'client/media/igloos/buildings/sprites/splitlevelsnow/splitlevelsnow-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(760, 480, 'splitlevelsnow', 'bg-lower')

        // bg_upper
        this.add.image(760, 480, 'splitlevelsnow', 'bg-upper')

        // door
        const door = this.add.image(241.45671992302226, 626.6936246395865, 'splitlevelsnow', 'door')
        door.setOrigin(0.5223338174820206, 0.8140467215513906)

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
