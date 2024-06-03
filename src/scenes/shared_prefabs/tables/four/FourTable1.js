import {Button, MoveTo, ShowHint} from '@components/components'

import SeatPoint from '@scenes/shared_prefabs/seat/SeatPoint'

/* START OF COMPILED CODE */

export default class FourTable1 extends Phaser.GameObjects.Container {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        /** @type {Phaser.GameObjects.Image} */
        this.game
        /** @type {SeatPoint} */
        this.seat2
        /** @type {SeatPoint} */
        this.seat1

        // table
        const table = scene.add.image(0, 0, 'lodge', 'table/table_1')
        table.setOrigin(0.7941176470588235, 0.7920792079207921)
        this.add(table)

        // game
        const game = scene.add.image(-36, -58, 'lodge', 'table/game_1')
        game.setOrigin(0.5490196078431373, 0.4935064935064935)
        this.add(game)

        // done2
        const done2 = new SeatPoint(scene, -56, 65)
        this.add(done2)

        // done1
        const done1 = new SeatPoint(scene, 66, 25)
        this.add(done1)

        // seat2
        const seat2 = new SeatPoint(scene, -84, 19)
        this.add(seat2)

        // seat1
        const seat1 = new SeatPoint(scene, 16, -43)
        this.add(seat1)

        // game (components)
        const gameButton = new Button(game)
        gameButton.spriteName = 'table/game_1'
        gameButton.activeFrame = false
        const gameMoveTo = new MoveTo(game)
        gameMoveTo.x = this.x
        gameMoveTo.y = this.y
        const gameShowHint = new ShowHint(game)
        gameShowHint.text = 'four_hint'

        // seat2 (prefab fields)
        seat2.sitFrame = 22
        seat2.donePoint = done2

        // seat1 (prefab fields)
        seat1.sitFrame = 18
        seat1.donePoint = done1

        this.game = game
        this.seat2 = seat2
        this.seat1 = seat1

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
