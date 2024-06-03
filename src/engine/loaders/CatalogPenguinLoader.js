import BaseLoader from './BaseLoader'

export default class CatalogPenguinLoader extends BaseLoader {
    constructor(scene, initiator) {
        super(scene)
        this.scene = scene
        this.initiator = initiator

        let suffix = '/client/media/interface/catalogs/clothing/penguins/'
        this.baseURL = this.shell.baseURL + suffix
        this.keyPrefix = 'catalog/penguin/'
    }

    loadPenguin(penguin) {
        let key = this.getKey(penguin)

        if (
            this.checkComplete('image', key, () => {
                this.onFileComplete(key, penguin)
            })
        ) {
            return
        }

        this.image(key, `${penguin}.webp`)
        this.start()
    }

    onFileComplete(key, penguin) {
        if (!this.textureExists(key)) {
            return
        }

        this.initiator.showPenguin()
    }
}
