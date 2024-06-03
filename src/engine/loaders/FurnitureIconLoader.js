import BaseLoader from './BaseLoader'

export default class FurnitureIconLoader extends BaseLoader {
    constructor(scene) {
        super(scene)
        this.scene = scene
        let suffix = '/client/media/'
        this.baseURL = this.shell.baseURL + suffix
        this.keyPrefix = 'furniture/icon/'
    }

    loadIcon(type, id, callback) {
        let key = this.getKey(`${type}/${id}`)
        let path
        switch (type) {
            case 'igloo':
                path = 'igloos/buildings/icon'
                break
            case 'furniture':
                path = 'furniture/icon/@2.5x'
                break
            case 'flooring':
                path = 'igloos/flooring/icon'
                break
            case 'location':
                path = 'igloos/locations/icon'
                break
        }

        if (
            this.checkComplete('image', key, () => {
                callback()
            })
        ) {
            return
        }

        this.image(key, `${path}/${id}.webp`)
        this.start()
    }
}
