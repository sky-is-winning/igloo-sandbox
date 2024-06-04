import BaseScene from '@scenes/base/BaseScene'

import {Button, Interactive, SimpleButton, ShowHint, InputText} from '@components/components'

/* START OF COMPILED CODE */

export default class Main extends BaseScene {
    constructor() {
        super('Main')

        /** @type {Phaser.GameObjects.Rectangle} */
        this.blocker
        /** @type {Array<any>} */
        this.hideOnSleep
        /** @type {Array<any>} */
        this.interfaceList

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {
        // blocker
        const blocker = this.add.rectangle(760, 480, 1520, 960)
        blocker.visible = false

        // lists
        const hideOnSleep = []
        const interfaceList = []

        // blocker (components)
        new Interactive(blocker)

        this.blocker = blocker
        this.hideOnSleep = hideOnSleep
        this.interfaceList = interfaceList

        this.events.emit('scene-awake')
    }

    /* START-USER-CODE */

    create() {}

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
