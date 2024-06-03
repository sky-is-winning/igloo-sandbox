import RoomScene from '@scenes/rooms/RoomScene'

/* START OF COMPILED CODE */

export default class RoomBuffer extends RoomScene {
    constructor() {
        super('RoomBuffer')

        /* START-USER-CTR-CODE */

        this.roomTriggers = {}

        this.music = 0

        this.loadSfx = []

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('town-pack', 'client/media/rooms/town/town-pack.json')
    }

    /** @returns {void} */
    _create() {
        this.events.emit('scene-awake')
    }

    /** @type {Phaser.GameObjects.Image[]} */
    sort

    /* START-USER-CODE */

    create() {
        super.create()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
