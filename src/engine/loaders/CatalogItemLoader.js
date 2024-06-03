import BaseLoader from './BaseLoader'

export default class CatalogItemLoader extends BaseLoader {
    constructor(scene, initiator) {
        super(scene)
        this.scene = scene
        this.initiator = initiator

        let suffix = '/client/media/clothing/'
        this.baseURL = this.shell.baseURL + suffix
        this.keyPrefix = 'catalogitem/'
    }

    loadItem(item, type) {
        let path = type == 'icon' ? 'icon' : 'paper/140'
        let key = this.getKey(`${path}/${item}`)

        if (
            this.checkComplete('image', key, () => {
                this.onFileComplete(key, item)
            })
        ) {
            return
        }

        this.image(key, `${path}/${item}.webp`)
        this.start()
    }

    onFileComplete(key, item) {
        if (!this.textureExists(key)) {
            return
        }

        this.initiator.setItem()
    }
}
