import BaseLoader from './BaseLoader'

export default class FurnitureLoader extends BaseLoader {
    constructor(scene) {
        super(scene)

        let suffix = '/assets/media/furniture/sprites/'
        this.baseURL = this.shell.baseURL + suffix
        this.keyPrefix = 'furniture/sprites/'
    }

    loadFurniture(item) {
        if (!item) return
        let key = this.getKey(item)

        if (
            this.checkComplete('json', key, () => {
                this.onFileComplete(key, item)
            })
        ) {
            return
        }

        this.multiatlas(key, `${item}.json`)
        this.start()
    }

    onFileComplete(key, item) {
        if (!this.textureExists(key)) {
            return
        }

        this.shell.events.emit(`furnitureLoaded-${item}`, key)
    }
}
