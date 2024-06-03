import BaseLoader from './BaseLoader'

export default class IglooCatalogFrontLoader extends BaseLoader {
    constructor(scene) {
        super(scene)
        this.scene = scene

        let suffix = '/client/media/interface/catalogs/furniture/fronts/'
        this.baseURL = this.shell.baseURL + suffix
        this.keyPrefix = 'catalog/fronts/'
    }

    loadFront(front) {
        let key = this.getKey(front)

        if (this.textureExists(key)) {
            this.onFileComplete(key, front)
            return
        }

        if (
            this.checkComplete('image', key, () => {
                this.onFileComplete(key, front)
            })
        ) {
            return
        }

        this.image(key, `${front}.webp`)
        this.start()
    }

    onFileComplete(key, front) {
        if (!this.textureExists(key)) {
            return
        }

        this.shell.events.emit(`textureLoaded:${key}`)
    }
}
