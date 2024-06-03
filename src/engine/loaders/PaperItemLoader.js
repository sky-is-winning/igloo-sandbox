import BaseLoader from './BaseLoader'

export default class PaperItemLoader extends BaseLoader {
    constructor(scene, initiator) {
        super(scene)
        this.scene = scene
        this.initiator = initiator

        let suffix = '/client/media/clothing/paper/'
        this.baseURL = this.shell.baseURL + suffix
        this.keyPrefix = 'paper/'
    }

    loadItem(item, size = 600) {
        let key = this.getKey(`${size}/${item}`)

        if (
            this.checkComplete('image', key, () => {
                this.onFileComplete(key, item)
            })
        ) {
            return
        }

        this.image(key, `${size}/${item}.webp`)
        this.start()
    }

    onFileComplete(key, item) {
        if (!this.textureExists(key)) {
            return
        }

        this.initiator.setItem()
    }
}
