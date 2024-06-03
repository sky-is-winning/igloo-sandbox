import IglooScene from '../IglooScene'

/* START OF COMPILED CODE */

export default class Snowglobe extends IglooScene {
    constructor() {
        super(`Snowglobe-preview-${Date.now()}${Phaser.Math.Between(0, 10000)}`)

        /** @type {Phaser.GameObjects.Sprite} */
        this.base
        /** @type {Phaser.GameObjects.Sprite} */
        this.snow
        /** @type {Phaser.GameObjects.Sprite} */
        this.glass

        /* START-USER-CTR-CODE */

        this.floorSpawn = [760, 600]
        this.wallSpawn = [760, 300]
        this.wallBounds = [450, 1040]
        this.floorFrame = 7

        this.isPreview = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {
        this.load.pack('snowglobe-pack', 'assets/media/igloos/buildings/sprites/snowglobe/snowglobe-pack.json')
    }

    /** @returns {void} */
    _create() {
        // base
        const base = this.add.sprite(0, 0, 'snowglobe', 'base_0001')
        base.setOrigin(0, 0)

        // snow
        const snow = this.add.sprite(763, 453.02794067215564, 'snowglobe', 'snow_0130')
        snow.setOrigin(0.5, 0.5085020418740832)

        // glass
        const glass = this.add.sprite(764, 812.686167034485, 'snowglobe', 'glass_0001')
        glass.setOrigin(0.5, 0.9982002427667671)

        // rectangle_1
        const rectangle_1 = this.add.rectangle(315, 805, 128, 128)
        rectangle_1.scaleX = 1.680599858658224
        rectangle_1.scaleY = 0.7104486328756106
        rectangle_1.angle = 17
        rectangle_1.fillColor = 589743
        rectangle_1.fillAlpha = 100

        this.base = base
        this.snow = snow
        this.glass = glass

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
