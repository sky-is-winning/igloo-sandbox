import IglooScene from '../IglooScene'
import {Button, MoveTo} from '@components/components'

/* START OF COMPILED CODE */

export default class CandySplitLevel extends IglooScene {
    constructor() {
        super('CandySplitLevel')

        /** @type {Phaser.GameObjects.Image} */
        this.floor

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            map: () => this.interface.main.onMapClick()
        }

        this.floorSpawn = [1080, 290]
        this.wallSpawn = [970, 200]
        this.wallBounds = [410, 1110]
        this.floorFrame = 3

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('candysplitlevel-pack', 'client/media/igloos/buildings/sprites/candysplitlevel/candysplitlevel-pack.json')
    }

    /** @returns {void} */
    _create() {
        // floor
        const floor = this.add.image(760, 480, 'candysplitlevel', 'bg-lower')

        // bg_upper
        this.add.image(760, 480, 'candysplitlevel', 'bg-upper')

        // door
        const door = this.add.image(247.14441145335877, 644.5391799276589, 'candysplitlevel', 'door')
        door.setOrigin(0.5740401041214434, 0.890966892852713)

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
