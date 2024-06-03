import BaseLoader from './BaseLoader'

export default class IglooCatalogFlooringIconLoader extends BaseLoader {
    constructor(scene) {
        super(scene)
        this.scene = scene

        let suffix = '/client/media/igloos/flooring/catalogicon/'
        this.baseURL = this.shell.baseURL + suffix
        this.keyPrefix = 'catalog/flooring/icon/'
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
