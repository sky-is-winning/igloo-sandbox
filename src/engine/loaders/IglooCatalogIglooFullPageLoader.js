import BaseLoader from './BaseLoader'

export default class IglooCatalogIglooFullPageLoader extends BaseLoader {
    constructor(scene) {
        super(scene)
        this.scene = scene

        let suffix = '/client/media/interface/catalogs/furniture/igloos/full/'
        this.baseURL = this.shell.baseURL + suffix
        this.keyPrefix = 'catalog/igloos/full/'
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
