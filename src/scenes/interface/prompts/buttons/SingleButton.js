import BaseContainer from '@scenes/base/BaseContainer'

import {Button, LocalisedString} from '@components/components'

/* START OF COMPILED CODE */

export default class SingleButton extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480)

        // button
        const button = scene.add.image(0, 0, 'prompt', 'window-button')
        button.setOrigin(0.5, 0.5047619047619047)
        this.add(button)

        // text_1
        const text_1 = scene.add.text(0, 0, '', {})
        text_1.setOrigin(0.5, 0.5)
        text_1.text = 'Okay'
        text_1.setStyle({align: 'center', fixedWidth: 280, fontFamily: 'cpBurbankSmall', fontSize: '40px', fontStyle: 'bold'})
        this.add(text_1)

        // button (components)
        const buttonButton = new Button(button)
        buttonButton.callback = () => this.onClick()

        // text_1 (components)
        const text_1LocalisedString = new LocalisedString(text_1)
        text_1LocalisedString.id = 'okay'

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    onClick() {
        if (this.parentContainer.callback) this.parentContainer.callback()
        this.parentContainer.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
