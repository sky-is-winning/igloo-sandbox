import BaseLoader from './BaseLoader'

export default class IglooCatalogFurnitureIconLoader extends BaseLoader {
    constructor(scene) {
        super(scene)
        this.scene = scene

        let suffix = '/client/media/furniture/icon/'
        this.baseURL = this.shell.baseURL + suffix
        this.keyPrefix = 'catalog/furniture/icon/'
    }

    loadIcon(icon, size = '@2.5x') {
        let key = this.getKey(icon + size)

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

        this.image(key, `${size}/${icon}.webp`)
        this.start()
    }

    onFileComplete(key, icon) {
        if (!this.textureExists(key)) {
            return
        }

        this.shell.events.emit(`textureLoaded:${key}`)
    }
}
