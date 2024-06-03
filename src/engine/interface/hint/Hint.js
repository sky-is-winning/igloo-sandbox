import BaseContainer from '@scenes/base/BaseContainer'

class Hint extends BaseContainer {
    constructor(scene, x, y) {
        super(scene, x, y)

        this.textStyle = {
            fontFamily: 'cpBurbankSmall',
            fontSize: 24,
            color: '#000000',
            align: 'center'
        }

        this.hint = this.createHint()
        this.text = this.createText()

        this.tween = null

        this.add([this.hint, this.text])
    }

    createHint() {
        let hint = this.scene.add.ninePatchContainer(0, 0, 176, 44, 'main', 'hint')
        hint.marginLeft = 10
        hint.marginRight = 10
        hint.marginTop = 10
        hint.marginBottom = 10

        return hint
    }

    createText() {
        let text = this.scene.add.text(0, -14, '', this.textStyle)

        return text
    }

    showHint(gameObject, text) {
        // Get global coordinates of gameObject
        let matrix = gameObject.getWorldTransformMatrix()

        // Set hint position
        this.x = matrix.getX(0, 0)
        this.y = matrix.getY(0, 0) - 56

        // Set text
        this.text.text = text
        this.text.x = -Math.round(this.text.width / 2)
        this.text.visible = false

        // Calculate and set new width
        let width = this.text.width > 144 ? this.text.width + 32 : 176
        this.hint.resize(width, 44)

        if (this.x - width / 2 < 0) {
            this.x = width / 2
        } else if (this.x + width / 2 > 1520) {
            this.x = 1520 - width / 2
        }

        this.visible = true

        // Tween scale of hint opening
        this.tween = this.scene.tweens.add({
            targets: this,
            scale: {from: 0.75, to: 1},
            duration: 50,
            ease: 'Linear',
            onComplete: () => {
                this.text.visible = true
            }
        })
    }

    hideHint() {
        this.visible = false

        if (this.tween) {
            this.scene.tweens.remove(this.tween)
            this.tween = null
        }
    }
}

export default Hint
