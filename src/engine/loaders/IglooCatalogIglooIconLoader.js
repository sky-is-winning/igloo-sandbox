import BaseLoader from './BaseLoader'

export default class IglooCatalogIglooIconLoader extends BaseLoader {
    constructor(scene) {
        super(scene)
        this.scene = scene

        let suffix = '/client/media/igloos/buildings/icon/'
        this.baseURL = this.shell.baseURL + suffix
        this.keyPrefix = 'catalog/igloos/icon/'
    }

    loadIcon(icon) {
        let key = this.getKey(icon)

        if (this.textureExists(key)) {
            this.onFileComplete(key, icon)
            return
        }

        if (
            this.checkComplete('image', key, () => {
                this.onFileComplete(key, icon)
            })
        ) {
            return
        }

        this.image(key, `${icon}.webp`)
        this.start()
    }

    onFileComplete(key, icon) {
        if (!this.textureExists(key)) {
            return
        }

        this.shell.events.emit(`textureLoaded:${key}`)
    }
}
