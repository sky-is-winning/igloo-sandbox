import BaseContainer from '@scenes/base/BaseContainer'

export default class PromptStamp extends BaseContainer {
    constructor(prompt, x, y, id) {
        super(prompt.scene, x ?? 100, y ?? 100)
        this.id = id
        this.prompt = prompt
        this.scene = prompt.scene

        if (!this.scene.textures.exists(`stamps/${id}`)) {
            this.scene.stampLoader.loadStamp(id)
            this.shell.events.once(`textureLoaded:stamps/${id}`, () => {
                this.addStamp()
            })
        } else {
            this.addStamp()
        }
    }

    addStamp() {
        // shadow
        const shadow = this.scene.add.image(2, 2.5, `stamps/${this.id}`)
        shadow.alpha = this.scene.shell.client.stamps.includes(parseInt(this.id)) ? 0.2 : 0.1
        shadow.tintFill = true
        shadow.tintTopLeft = 0
        shadow.tintTopRight = 0
        shadow.tintBottomLeft = 0
        shadow.tintBottomRight = 0
        shadow.scaleX = 0.5
        shadow.scaleY = 0.5
        this.add(shadow)

        // stamp
        const stamp = this.scene.add.image(0, 0, `stamps/${this.id}`)
        stamp.scaleX = 0.5
        stamp.scaleY = 0.5
        this.add(stamp)

        if (!this.scene.shell.client.stamps.includes(parseInt(this.id))) {
            // locked
            const locked = this.scene.add.image(0, 0, `stamps/${this.id}`)
            locked.alpha = 0.7
            locked.tintFill = true
            locked.scaleX = 0.5
            locked.scaleY = 0.5
            this.add(locked)

            this.locked = locked
        }

        this.shadow = shadow
        this.stamp = stamp

        this.stamp.setInteractive()
        this.stamp.on('pointerover', () => {
            this.prompt.onStampOver(this.id, this.x, this.y)
        })
        this.stamp.on('pointerout', () => {
            this.prompt.onStampOut()
        })
    }
}
