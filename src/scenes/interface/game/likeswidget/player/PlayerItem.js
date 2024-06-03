import BaseContainer from '@scenes/base/BaseContainer'
import PaperDoll from './paperdoll/PaperDoll'

import {SimpleButton, NineSlice} from '@components/components'

/* START OF COMPILED CODE */

export default class PlayerItem extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        /** @type {Phaser.GameObjects.Image} */
        this.bg
        /** @type {Phaser.GameObjects.Image} */
        this.player
        /** @type {PaperDoll} */
        this.paperDoll
        /** @type {Phaser.GameObjects.Text} */
        this.username

        // bg
        const bg = scene.add.image(0, 0, 'main', 'like-player-bg')
        this.add(bg)

        // player
        const player = scene.add.image(0, 0, 'main', 'like-player')
        this.add(player)

        // paperDoll
        const paperDoll = new PaperDoll(scene, 0, 0)
        paperDoll.scaleX = 1
        paperDoll.scaleY = 1
        paperDoll.visible = false
        this.add(paperDoll)

        // username
        const username = scene.add.text(32, 1, '', {})
        username.setOrigin(0, 0.5)
        username.visible = false
        username.text = 'Username'
        username.setStyle({color: '#ffffffff', fixedWidth: 160, fontFamily: 'cpBurbankSmall', fontSize: '18px', 'shadow.color': '#000000ff'})
        this.add(username)

        this.bg = bg
        this.player = player
        this.paperDoll = paperDoll
        this.username = username

        /* START-USER-CTR-CODE */

        this.id = null
        this.containerName = 'FriendItem'

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    setItem(item) {
        this.id = item.id
        this.username.text = item.username
        this.paperDoll.visible = true
        this.paperDoll.loadDoll(item)
        this.player.visible = false
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
