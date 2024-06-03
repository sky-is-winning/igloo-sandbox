import BaseLoader from './BaseLoader'

export default class IglooCatalogBackgroundLoader extends BaseLoader {
    constructor(scene) {
        super(scene)
        this.scene = scene

        let suffix = '/client/media/interface/catalogs/furniture/backgrounds/'
        this.baseURL = this.shell.baseURL + suffix
        this.keyPrefix = 'catalog/backgrounds/'
    }

    loadBackground(background) {
        let key = this.getKey(background)

        if (this.textureExists(key)) {
            this.onFileComplete(key, background)
            return
        }

        if (
            this.checkComplete('image', key, () => {
                this.onFileComplete(key, background)
            })
        ) {
            return
        }

        this.image(key, `${background}.webp`)
        this.start()
    }

    onFileComplete(key, background) {
        if (!this.textureExists(key)) {
            return
        }

        this.shell.events.emit(`textureLoaded:${key}`)
    }
}
