import BaseLoader from './BaseLoader'

export default class UnlockItemsLoader extends BaseLoader {
    constructor(scene, itemcontainer) {
        super(scene)

        this.itemcontainer = itemcontainer
    }

    get baseURL() {
        let suffix = '/client/media/clothing/icon/large/'
        return this.shell.baseURL + suffix
    }

    get keyPrefix() {
        return this.itemcontainer.type == 'clothing/icon/'
    }

    get scale() {
        return 0.5
    }

    loadIcon(item) {
        if (this.itemcontainer.icon) {
            this.itemcontainer.icon.destroy()
        }

        let key = this.getKey(item)

        if (
            this.checkComplete('image', key, () => {
                this.onFileComplete(key, item)
            })
        ) {
            return
        }

        this.image(key, `${item}.webp`)
        this.start()
    }

    onFileComplete(key, item) {
        if (!this.itemcontainer.visible || !this.textureExists(key) || item != this.itemcontainer.item) {
            return
        }

        if (this.itemcontainer.icon) {
            this.itemcontainer.icon.destroy()
        }

        let icon = this.scene.add.image(0, -182, key)
        icon.scale = this.scale

        this.itemcontainer.add(icon)
        this.itemcontainer.icon = icon
    }
}
