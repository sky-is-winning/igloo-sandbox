import BaseLoader from './BaseLoader'

export default class IglooCatalogLocationLoader extends BaseLoader {
    constructor(scene) {
        super(scene)
        this.scene = scene

        let suffix = '/client/media/interface/catalogs/furniture/locations/'
        this.baseURL = this.shell.baseURL + suffix
        this.keyPrefix = 'catalog/locations/'
    }

    loadLocation(location) {
        let key = this.getKey(location)

        if (
            this.checkComplete('image', key, () => {
                this.onFileComplete(key, location)
            })
        ) {
            return
        }

        this.image(key, `${location}.webp`)
        this.start()
    }

    onFileComplete(key, location) {
        if (!this.textureExists(key)) {
            return
        }

        this.shell.events.emit(`textureLoaded:${key}`)
    }
}
