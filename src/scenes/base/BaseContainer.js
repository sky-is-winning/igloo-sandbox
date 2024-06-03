export default class BaseContainer extends Phaser.GameObjects.Container {
    constructor(scene, x, y) {
        super(scene, x, y)
        this.isCustomContainer = true
    }

    get crumbs() {
        return this.scene.crumbs
    }

    get airtower() {
        return this.scene.airtower
    }

    get interface() {
        return this.scene.interface
    }

    get shell() {
        return this.scene.shell
    }

    getString(...args) {
        return this.scene.getString(...args)
    }

    show() {
        this.visible = true
    }

    close() {
        this.visible = false
    }
}
