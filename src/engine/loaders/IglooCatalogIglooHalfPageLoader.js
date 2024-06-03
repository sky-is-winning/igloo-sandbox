import BaseLoader from './BaseLoader'

export default class IglooCatalogIglooHalfPageLoader extends BaseLoader {
    constructor(scene) {
        super(scene)
        this.scene = scene

        let suffix = '/client/media/interface/catalogs/furniture/igloos/half/'
        this.baseURL = this.shell.baseURL + suffix
        this.keyPrefix = 'catalog/igloos/half/'
    }

    loadIgloo(igloo) {
        let key = this.getKey(igloo)

        if (this.textureExists(key)) {
            this.onFileComplete(key, igloo)
            return
        }

        if (
            this.checkComplete('image', key, () => {
                this.onFileComplete(key, igloo)
            })
        ) {
            return
        }

        this.image(key, `${igloo}.webp`)
        this.start()
    }

    onFileComplete(key, igloo) {
        if (!this.textureExists(key)) {
            return
        }

        this.shell.events.emit(`textureLoaded:${key}`)
    }
}
